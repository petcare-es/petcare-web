// pages/vacinas.tsx
import { useState } from "react";
import Image from "next/image";
import { FaPaw, FaUserCircle, FaArrowLeft } from "react-icons/fa";
import logo from "/public/AssetsCadastro/logo.svg";

interface VaccineEntry {
  date: string;
  vaccine: string;
  hadReaction: boolean;
  willReturn: boolean;
}

export default function Vacinas() {
  const [vaccines, setVaccines] = useState<VaccineEntry[]>([
    { date: "", vaccine: "", hadReaction: false, willReturn: false },
    { date: "", vaccine: "", hadReaction: false, willReturn: false },
    { date: "", vaccine: "", hadReaction: false, willReturn: false },
    { date: "", vaccine: "", hadReaction: false, willReturn: false },
    { date: "", vaccine: "", hadReaction: false, willReturn: false },
    { date: "", vaccine: "", hadReaction: false, willReturn: false },
    { date: "", vaccine: "", hadReaction: false, willReturn: false },
    { date: "", vaccine: "", hadReaction: false, willReturn: false },
    { date: "", vaccine: "", hadReaction: false, willReturn: false },
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleReaction = (index: number, field: "hadReaction" | "willReturn") => {
    const updatedVaccines = [...vaccines];
    updatedVaccines[index][field] = !updatedVaccines[index][field];
    setVaccines(updatedVaccines);
  };

  const handleInputChange = (index: number, field: "date" | "vaccine", value: string) => {
    const updatedVaccines = [...vaccines];
    updatedVaccines[index][field] = value;
    setVaccines(updatedVaccines);
  };

  return (
    <div className="bg-[#E6F3FF] min-h-screen flex flex-col items-center relative">
      {/* Fundo de patas movido para o nível mais externo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
        style={{ backgroundImage: "url('/AssetsHome/pataFundo.svg')" }}
      ></div>

      {/* Header (igual ao da página inicial) */}
      <header className="w-full bg-white py-4 px-6 md:px-8 flex justify-between items-center shadow-md relative z-10">
        <div className="flex items-center">
          <FaArrowLeft className="text-black text-2xl cursor-pointer hover:text-slate-500 mr-4" onClick={() => window.history.back()} />
          <h1 className="text-black text-2xl md:text-3xl font-bold flex items-center">
            PetCare <FaPaw className="ml-2 hidden md:inline" />
          </h1>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={() => window.location.reload()}>
          <Image src={logo} width={70} height={25} alt="Logo PetCare" />
        </div>
        <FaUserCircle className="text-black text-3xl cursor-pointer hover:text-slate-500" />
      </header>

      {/* Main Content */}
      <main className="relative shadow-md rounded-3xl mt-8 p-6 md:p-8 w-full max-w-[1334px] min-h-[600px] text-center flex flex-col items-center bg-[#AEB8FF] z-10">
        {/* Conteúdo sobreposto */}
        <div className="relative z-10 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#27187D] mb-6">Carteira de Vacinação</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
            {vaccines.map((vaccine, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-left">
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Data ___/___/___"
                    value={vaccine.date}
                    onChange={(e) => handleInputChange(index, "date", e.target.value)}
                    className="w-full p-1 border-b border-gray-300 text-gray-700 focus:outline-none"
                    disabled={!isEditing}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Qual vacina?"
                    value={vaccine.vaccine}
                    onChange={(e) => handleInputChange(index, "vaccine", e.target.value)}
                    className="w-full p-1 border-b border-gray-300 text-gray-700 focus:outline-none"
                    disabled={!isEditing}
                  />
                </div>
                <div className="flex items-center mb-2">
                  <label className="text-gray-700 text-sm">Houve reação?</label>
                  <button
                    onClick={() => handleToggleReaction(index, "hadReaction")}
                    className={`ml-2 px-2 py-1 rounded-md text-sm ${
                      vaccine.hadReaction ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
                    } ${!isEditing ? "cursor-not-allowed" : "hover:bg-green-600"}`}
                    disabled={!isEditing}
                  >
                    {vaccine.hadReaction ? "Sim" : "Não"}
                  </button>
                </div>
                <div className="flex items-center">
                  <label className="text-gray-700 text-sm">Quando voltar?</label>
                  <button
                    onClick={() => handleToggleReaction(index, "willReturn")}
                    className={`ml-2 px-2 py-1 rounded-md text-sm ${
                      vaccine.willReturn ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
                    } ${!isEditing ? "cursor-not-allowed" : "hover:bg-green-600"}`}
                    disabled={!isEditing}
                  >
                    {vaccine.willReturn ? "Sim" : "Não"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-[#27187D] text-white py-2 px-6 rounded-md hover:bg-[#758AFD] transition-colors"
            >
              {isEditing ? "Salvar" : "Editar"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}