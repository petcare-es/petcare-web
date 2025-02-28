import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Importe o useRouter
import logo from "/public/AssetsLogin/logo.svg";
import pata from "/public/AssetsLogin/pataLaranja.svg";
import petLogin from "/public/AssetsLogin/petLogin.svg";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({
    email: false,
    senha: false,
  });

  const router = useRouter(); // Inicialize o useRouter

  const handleSubmit = () => {
    if (!email || !senha) {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      // alert("Login realizado com sucesso!"); // Opcional: remover ou manter o alerta
      router.push("/home"); // Redireciona para a página Home
    }
  };

  const handleSignUp = () => {
    router.push("/cadastro"); // Redireciona para a página de cadastro
  };

  const inputClass = (field: string, touchedField: boolean) =>
    !field && touchedField
      ? "w-full h-[50px] sm:h-[55px] lg:h-[70px] rounded-3xl bg-[#AEB8FF] px-4 text-[14px] sm:text-[16px] lg:text-[22px] text-black placeholder:text-black border-2 border-red-500"
      : "w-full h-[50px] sm:h-[55px] lg:h-[70px] rounded-3xl bg-[#AEB8FF] px-4 text-[14px] sm:text-[16px] lg:text-[22px] text-black placeholder:text-black";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#AEB8FF] p-4 relative overflow-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/AssetsLogin/pataFundo.svg')" }}
      ></div>
      <div className="flex flex-col lg:flex-row bg-white w-full max-w-lg lg:max-w-[1200px] h-auto lg:h-[750px] shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 relative z-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center sm:pt-10 lg:pt-20">
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
          <div className="mt-6 w-full sm:max-w-[400px] lg:w-[500px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched({ ...touched, email: true })}
              placeholder="Email"
              className={inputClass(email, touched.email)}
            />
            <div className="relative mt-4">
              <input
                type={showPassword ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                onBlur={() => setTouched({ ...touched, senha: true })}
                placeholder="Senha"
                className={inputClass(senha, touched.senha)}
              />
              <button
                className="absolute right-4 top-3 lg:top-4 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm mt-2">
              <p>{error}</p>
            </div>
          )}
          <div className="flex justify-between w-full sm:max-w-[400px] lg:w-[500px] mt-3 text-[12px] sm:text-[14px] lg:text-[16px] text-black">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 transition-all duration-200 hover:text-[#27187D]"
              />
              Lembrar senha
            </label>
            <button className="text-[#758AFD] transition-all duration-200 hover:text-[#27187D] hover:underline">
              Esqueci a senha
            </button>
          </div>
          <div className="flex flex-col lg:flex-row lg:pl-2 mt-6 gap-4 w-full sm:max-w-[400px] lg:w-[500px]">
            <button
              className="w-full lg:w-[179px] h-[50px] sm:h-[55px] lg:h-[60px] bg-[#27187D] text-white rounded-3xl transition-all duration-200 hover:bg-[#1c1443]"
              onClick={handleSubmit}
            >
              Login
            </button>
            <button
              className="w-full lg:w-[179px] h-[50px] sm:h-[55px] lg:h-[60px] bg-[#F1F2F6] text-[#27187D] rounded-3xl transition-all duration-200 hover:bg-[#c2c8e5] hover:text-[#1E1266]"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center mt-4 lg:mt-0 sm:pl-4">
          <Image src={petLogin} width={451} height={200} alt="Pet" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;