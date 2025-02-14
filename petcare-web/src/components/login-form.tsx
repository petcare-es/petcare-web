import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import logo from "/public/AssetsLogin/logo.svg";
import pata from "/public/AssetsLogin/pataLaranja.svg";
import pataFundo from "/public/AssetsLogin/pataFundo.svg";
import escamas  from "/public/AssetsLogin/escamas.svg";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-[#AEB8FF] relative">
      {/* Fundo SVG com opacidade */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/AssetsLogin/pataFundo.svg')" }}
      ></div>
      
      {/* Container central único */}
      <div className="flex flex-col md:flex-row bg-white w-[860px] md:w-[1200px] h-[750px] md:h-[750px] shadow-lg rounded-lg p-8 relative z-10">
        {/* Lado Esquerdo */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Logo */}
          <Image src={logo} width={100} height={100} alt="Logo" />
          
          {/* Mensagem de boas-vindas */}
          <div className="relative text-center mt-4">
            <h1 className="text-[40px] md:text-[60px] font-playfair text-black">Bem Vindo!</h1>
            <Image src={pata} width={50} height={50} alt="Patinha" className="absolute top-2 right-[-50px]" />
          </div>
          
          {/* Frase */}
          <p className="text-[13px] md:text-[15px] font-playfair text-black mt-2">Amor e cuidado para seu pet, todos os dias!</p>
          
          {/* Campos de entrada */}
          <div className="mt-6 w-[90%] md:w-[441px]">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[60px] rounded bg-[#AEB8FF] px-4 text-[16px] md:text-[20px] text-black placeholder:text-black"
            />
            <div className="relative mt-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className="w-full h-[60px] rounded bg-[#AEB8FF] px-4 text-[16px] md:text-[20px] text-black placeholder:text-black"
              />
              <button
                className="absolute right-4 top-4 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          
          {/* Lembrar senha e Esqueci a senha */}
          <div className="flex justify-between w-[90%] md:w-[441px] mt-3 text-[13px] md:text-[15px] text-black">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Lembrar senha
            </label>
            <button className="text-[#758AFD]">Esqueci a senha</button>
          </div>
          
          {/* Botões de login e sign up */}
          <div className="flex flex-col md:flex-row mt-6 gap-4">
            <button className="w-full md:w-[179px] h-[60px] bg-[#27187D] text-white rounded">Login</button>
            <button className="w-full md:w-[179px] h-[60px] bg-[#F1F2F6] text-[#27187D] rounded">Sign Up</button>
          </div>
        </div>

        {/* Lado direito com imagem dentro do mesmo retângulo */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          <Image src={escamas} width={581} height={658} alt="Pet" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
