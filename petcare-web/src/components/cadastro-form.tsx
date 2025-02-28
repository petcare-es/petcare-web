import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import logo from "/public/AssetsCadastro/logo.svg";
import pata from "/public/AssetsCadastro/pataLaranja.svg";
import petLogin from "/public/AssetsCadastro/linguao.svg";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [termos, setTermos] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false); // Estado para verificar se o botão foi pressionado

  const handleSubmit = () => {
    setTouched(true); // Marca que o botão foi pressionado
    // Validação dos campos
    if (!nome || !email || !senha || !confirmarSenha || !termos) {
      setError("Por favor, preencha todos os campos e concorde com os termos de uso.");
    } else if (senha !== confirmarSenha) {
      setError("As senhas não coincidem.");
    } else {
      setError(""); // Limpa a mensagem de erro se tudo estiver correto
      // Aqui você pode adicionar a lógica para enviar os dados do formulário
      alert("Conta criada com sucesso!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#AEB8FF] p-4 relative overflow-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/AssetsLogin/pataFundo.svg')" }}
      ></div>
      {/* Container central único */}
      <div className="flex flex-col lg:flex-row bg-white w-full max-w-lg lg:max-w-[1100px] h-auto lg:h-[750px] shadow-lg rounded-lg p-6 sm:p-8 lg:p-6 relative z-10">
        {/* Lado Esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col items-center sm:pt-10 lg:pt-12">
          {/* Logo */}
          <Image src={logo} width={70} height={70} alt="Logo" />

          {/* Mensagem de boas-vindas */}
          <div className="relative text-center mt-4">
            <h1 className="text-[28px] sm:text-[36px] lg:text-[50px] font-playfair text-black">
              Criar Conta
            </h1>
            <Image
              src={pata}
              width={40}
              height={40}
              alt="Patinha"
              className="absolute top-2 right-[-40px]"
            />
          </div>

          {/* Frase */}
          <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-playfair text-black mt-2 text-center">
            Amor e cuidado para seu pet, todos os dias!
          </p>

          {/* Campos de entrada */}
          <div className="mt-6 w-full sm:max-w-[400px] lg:w-[450px]">
            {/* Nome */}
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              className={`w-full h-[45px] sm:h-[50px] lg:h-[60px] rounded-3xl bg-[#AEB8FF] px-4 text-[14px] sm:text-[16px] lg:text-[18px] text-black placeholder:text-black ${touched && !nome ? "border-2 border-red-500" : ""}`}
            />

            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={`w-full h-[45px] sm:h-[50px] lg:h-[60px] rounded-3xl bg-[#AEB8FF] px-4 text-[14px] sm:text-[16px] lg:text-[18px] text-black placeholder:text-black mt-4 ${touched && !email ? "border-2 border-red-500" : ""}`}
            />

            {/* Senha */}
            <div className="relative mt-4">
              <input
                type={showPassword ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
                className={`w-full h-[45px] sm:h-[50px] lg:h-[60px] rounded-3xl bg-[#AEB8FF] px-4 text-[14px] sm:text-[16px] lg:text-[18px] text-black placeholder:text-black ${touched && !senha ? "border-2 border-red-500" : ""}`}
              />
              <button
                className="absolute right-4 top-3 lg:top-4 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirmar Senha */}
            <div className="relative mt-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                placeholder="Confirmar Senha"
                className={`w-full h-[45px] sm:h-[50px] lg:h-[60px] rounded-3xl bg-[#AEB8FF] px-4 text-[14px] sm:text-[16px] lg:text-[18px] text-black placeholder:text-black ${touched && !confirmarSenha ? "border-2 border-red-500" : ""}`}
              />
              <button
                className="absolute right-4 top-3 lg:top-4 text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Li e concordo com os termos de uso */}
          <div className="flex items-center mt-3 w-full sm:max-w-[400px] lg:w-[450px] text-[12px] sm:text-[14px] lg:text-[16px] text-black">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={termos}
                onChange={(e) => setTermos(e.target.checked)}
                className="mr-2 transition-all duration-200 hover:text-[#27187D]"
              />
              Li e concordo com os termos de uso
            </label>
          </div>

          {/* Exibir mensagem de erro */}
          {error && (
            <div className="text-red-500 text-sm mt-2">
              <p>{error}</p>
            </div>
          )}

          {/* Botão Criar Conta */}
          <div className="flex flex-col lg:pl-24 lg:flex-row mt-6 gap-4 w-full sm:max-w-[400px] lg:w-[450px]">
            <button
              className="w-full lg:w-[179px] h-[50px] sm:h-[55px] lg:h-[60px] bg-[#27187D] text-white rounded-3xl transition-all duration-200 hover:bg-[#1c1443]"
              onClick={handleSubmit}
            >
              Criar Conta
            </button>
          </div>
        </div>

        {/* Lado direito com imagem dentro do mesmo retângulo */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center mt-4 lg:mt-0 sm:pl-4">
          <Image src={petLogin} width={400} height={180} alt="Pet" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
