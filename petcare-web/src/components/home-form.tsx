import { useState } from "react";
import Image from "next/image";
import { FaPaw, FaBone, FaUserCircle, FaTimes, FaTrash, FaFileMedical, FaBook } from "react-icons/fa";
import logo from "/public/AssetsCadastro/logo.svg";
import gato from "/public/AssetsHome/gatinho.svg";
import cachorro from "/public/AssetsHome/cachorro.svg";
import tartaruga from "/public/AssetsHome/tartaruga.svg";

export default function Home() {
  const [pets, setPets] = useState([
    { id: 1, name: "Rhondney", age: "3 meses", image: gato },
    { id: 2, name: "Coco", age: "1 ano", image: cachorro },
    { id: 3, name: "Maldição", age: "100 anos", image: tartaruga },
  ]);

  const [selectedPet, setSelectedPet] = useState<{ id: number; name: string; age: string; image: any } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewPetModal, setViewPetModal] = useState(false);
  const [newPetName, setNewPetName] = useState("");
  const [newPetAge, setNewPetAge] = useState("");
  const [newPetImage, setNewPetImage] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDeletePet = (id: number) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPetImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPet = () => {
    if (!newPetName && !newPetAge) {
      setErrorMessage("Por favor, preencha o nome e a idade do pet!");
    } else if (!newPetName) {
      setErrorMessage("Por favor, preencha o nome do pet!");
    } else if (!newPetAge) {
      setErrorMessage("Por favor, preencha a idade do pet!");
    } else {
      const newPet = {
        id: pets.length + 1,
        name: newPetName,
        age: newPetAge,
        image: newPetImage || gato,
      };
      setPets([...pets, newPet]);
      setNewPetName("");
      setNewPetAge("");
      setNewPetImage(null);
      setErrorMessage(null);
      setModalOpen(false);
    }
  };

  return (
    <div className="bg-[#E6F3FF] min-h-screen flex flex-col items-center relative">
      <div className="absolute inset-0 bg-cover bg-[#AEB8FF] bg-center opacity-100 z-0" style={{ backgroundImage: "url('/AssetsHome/pataFundo.svg')" }}></div>

      <header className="w-full bg-white py-4 px-6 md:px-8 flex justify-between items-center shadow-md relative z-10">
        <h1 className="text-black text-2xl md:text-3xl font-bold flex items-center">
          PetCare <FaPaw className="ml-2 hidden md:inline" />
        </h1>
        <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={() => window.location.reload()}>
          <Image src={logo} width={70} height={25} alt="Logo PetCare" />
        </div>
        <FaUserCircle className="text-black text-3xl cursor-pointer hover:text-slate-500" />
      </header>

      <main className="relative shadow-md rounded-3xl mt-8 p-6 md:p-8 w-full max-w-[1334px] min-h-[600px] text-center flex flex-col items-center bg-[#fff] z-10">
        <div className="w-full">
          <p className="text-[#AEB8FF] text-md md:text-lg mb-6 font-bold text-left">
            Seu espaço dedicado ao bem-estar e cuidado dos seus pets <FaPaw className="inline" />
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
            {pets.map((pet) => (
              <div key={pet.id} className="bg-white p-4 rounded-lg shadow-md text-center relative">
                <div className="w-full h-[180px] md:h-[200px] bg-yellow-400 rounded-t-lg overflow-hidden relative">
                  {typeof pet.image === "string" ? (
                    <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
                  ) : (
                    <Image src={pet.image} layout="fill" objectFit="cover" alt={pet.name} />
                  )}
                </div>
                <div className="p-4 flex justify-between items-center">
                  <h2 className="text-black text-lg md:text-xl font-bold">{pet.name}</h2>
                  <FaTrash className="text-red-500 text-lg cursor-pointer hover:text-red-700 transition" onClick={() => handleDeletePet(pet.id)} />
                </div>
                <p className="text-black text-sm">{pet.age}</p>
                <button className="mt-3 bg-[#27187D] text-white text-sm py-2 px-4 rounded-md w-full hover:bg-[#758AFD]" onClick={() => { setSelectedPet(pet); setViewPetModal(true); }}>
                  Ver Pet
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button
              className="bg-[#030D4F] border-white border-4 p-4 rounded-full shadow-md hover:bg-[#758AFD]"
              onClick={() => setModalOpen(true)}
            >
              <FaBone className="text-[#FFFFFF] text-2xl" />
            </button>
          </div>
        </div>
      </main>

      {/* Modal para adicionar novo pet */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 text-center relative">
            <FaTimes className="absolute top-3 right-3 text-red-500 text-xl cursor-pointer" onClick={() => setModalOpen(false)} />
            <h2 className="text-xl font-bold text-[#27187D] mb-4">Adicionar Novo Pet</h2>
            <input
              type="text"
              placeholder="Nome do pet"
              value={newPetName}
              onChange={(e) => setNewPetName(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
            />
            <input
              type="text"
              placeholder="Idade do pet"
              value={newPetAge}
              onChange={(e) => setNewPetAge(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            {newPetImage && (
              <div className="mb-4">
                <img src={newPetImage} alt="Prévia" className="w-full h-32 object-cover rounded-md" />
              </div>
            )}
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}
            <button
              onClick={handleAddPet}
              className="bg-[#27187D] text-white py-2 px-4 rounded-md w-full hover:bg-[#758AFD]"
            >
              Adicionar Pet
            </button>
          </div>
        </div>
      )}

      {/* Modal para visualizar pet */}
      {viewPetModal && selectedPet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 text-center relative">
            <FaTimes className="absolute top-3 right-3 text-red-500 text-xl cursor-pointer" onClick={() => setViewPetModal(false)} />
            <h2 className="text-xl font-bold text-[#27187D]">{selectedPet.name}</h2>
            <div className="mt-4">
              <button
                className="bg-[#27187D] text-white py-2 px-4 rounded-md w-full mb-2 hover:bg-[#758AFD] flex items-center justify-center"
                onClick={() => window.location.href = "/vacinas"}
              >
                <FaFileMedical className="mr-2" /> Carteira de Vacinas
              </button>
              <button
                className="bg-[#27187D] text-white py-2 px-4 rounded-md w-full hover:bg-[#758AFD] flex items-center justify-center"
                onClick={() => window.location.href = "/diario"}
              >
                <FaBook className="mr-2" /> Diário do Pet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}