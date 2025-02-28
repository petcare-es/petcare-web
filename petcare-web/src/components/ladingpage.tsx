import Image from "next/image";
import { useRouter } from "next/navigation"; // Importe o useRouter
import logo from "/public/AssetsLogin/logo.svg";
import pata from "/public/AssetsLogin/pataLaranja.svg";
import colher from "/public/AssetsNavegador/narigudo 1.svg"; // Imagem nova adicionada

const MainScreen = () => {
  const router = useRouter(); // Inicialize o useRouter

  const handleStart = () => {
    router.push("/login"); // Redireciona para a página de login
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#AEB8FF] p-4 relative overflow-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/AssetsLogin/pataFundo.svg')" }}
      ></div>
      <div className="flex flex-col lg:flex-row bg-white w-full max-w-lg lg:max-w-[1200px] h-auto lg:h-[750px] shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 relative z-10">
        <div className="w-full mt-20 lg:w-1/2 flex flex-col items-center sm:pt-10 lg:pt-20">
          <Image src={logo} width={90} height={90} alt="Logo" />
          <div className="relative text-center mt-4">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[70px] font-playfair text-black">
              Bem Vindo!
            </h1>
            <Image
              src={pata}
              width={50}
              height={50}
              alt="Patinha"
              className="absolute top-2 right-[-50px]"
            />
          </div>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-playfair text-black mt-2 text-center">
            Amor e cuidado para seu pet, todos os dias!
          </p>
          <div className="mt-6 w-full sm:max-w-[400px] lg:w-[500px] flex justify-center">
            <button
              className="w-full lg:w-[179px] h-[50px] sm:h-[55px] lg:h-[60px] bg-[#27187D] text-white rounded-3xl transition-all duration-200 hover:bg-[#1c1443]"
              onClick={handleStart}
            >
              Iniciar
            </button>
          </div>
        </div>
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center mt-4 lg:mt-0 sm:pl-4">
          <Image src={colher} width={400} height={300} alt="Pet" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;