// pages/diario.tsx
import { useState } from "react";
import Image from "next/image";
import { FaPaw, FaUserCircle, FaArrowLeft, FaClock, FaUtensils } from "react-icons/fa";
import logo from "/public/AssetsCadastro/logo.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface DiaryEntry {
  time: string;
  food: string;
}

export default function Diario() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 1, 27));
  const [mood, setMood] = useState<string | null>(null);
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([
    { time: "", food: "" },
    { time: "", food: "" },
    { time: "", food: "" },
    { time: "", food: "" },
  ]);

  const handleMoodSelect = (selectedMood: string) => {
    setMood(selectedMood);
  };

  const handleInputChange = (index: number, field: "time" | "food", value: string) => {
    const updatedEntries = [...diaryEntries];
    updatedEntries[index][field] = value;
    setDiaryEntries(updatedEntries);
  };

  const handleAddEntry = () => {
    setDiaryEntries([...diaryEntries, { time: "", food: "" }]);
  };

  type CalendarValue = Date | Date[] | [Date | null, Date | null] | null;

  const handleDateChange = (value: CalendarValue, event: React.MouseEvent<HTMLButtonElement>) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value)) {
      const firstDate = value[0];
      if (firstDate instanceof Date) {
        setSelectedDate(firstDate);
      } else {
        setSelectedDate(null);
      }
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <div className="bg-[#E6F3FF] min-h-screen flex flex-col items-center relative">
      {/* Fundo de patas movido para o nível mais externo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
        style={{ backgroundImage: "url('/AssetsHome/pataFundo.svg')" }}
      ></div>

      {/* Header */}
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
      <main className="relative shadow-md rounded-3xl mt-8 p-6 md:p-8 w-full max-w-[1334px] min-h-[600px] flex flex-col items-center bg-[#AEB8FF] z-10">
        {/* Conteúdo sobreposto */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between">
          {/* Seção Esquerda: Calendário e Humor */}
          <div className="w-full md:w-[400px] mb-6 md:mb-0 md:pr-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#27187D] mb-4 text-center md:text-left">Diário Pet</h2>

            {/* Calendário com fundo branco */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                locale="pt-BR"
                className="border-none w-full text-gray-700"
                tileClassName={({ date }) =>
                  selectedDate &&
                  date.getDate() === selectedDate.getDate() &&
                  date.getMonth() === selectedDate.getMonth() &&
                  date.getFullYear() === selectedDate.getFullYear()
                    ? "bg-[#27187D] text-white rounded-full"
                    : "hover:bg-gray-200 rounded-full"
                }
                navigationLabel={({ date }) =>
                  `${date.toLocaleString("pt-BR", { month: "short" }).replace(".", "")}, ${date.getFullYear()}`
                }
              />
            </div>

            {/* Seção de Humor */}
            <div className="mt-6">
              <p className="text-[#27187D] text-lg font-semibold mb-2 text-center md:text-left">
                Qual o mood do seu pet hj?
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {["😊", "🥺", "😮", "😡", "😴", "😑"].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => handleMoodSelect(emoji)}
                    className={`text-3xl p-2 rounded-full ${
                      mood === emoji ? "bg-[#27187D] text-white" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Seção Direita: Registro de Alimentação */}
          <div className="w-full md:w-1/2">
            {diaryEntries.map((entry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex items-center mb-2">
                  <FaClock className="text-gray-700 mr-2" />
                  <input
                    type="text"
                    placeholder="Hora:"
                    value={entry.time}
                    onChange={(e) => handleInputChange(index, "time", e.target.value)}
                    className="w-full p-1 border-b border-gray-300 text-gray-700 focus:outline-none"
                  />
                </div>
                <div className="flex items-center">
                  <FaUtensils className="text-gray-700 mr-2" />
                  <input
                    type="text"
                    placeholder="Alimento:"
                    value={entry.food}
                    onChange={(e) => handleInputChange(index, "food", e.target.value)}
                    className="w-full p-1 border-b border-gray-300 text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-center md:justify-end">
              <button
                onClick={handleAddEntry}
                className="bg-[#27187D] text-white py-2 px-6 rounded-md hover:bg-[#758AFD] transition-colors"
              >
                Registrar Refeição
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}