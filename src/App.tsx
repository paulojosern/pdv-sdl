import React, { useState } from "react";
import { User, Lock, Mail } from "lucide-react";
import "./App.css";
import Panel from "./components/panel";
import Teclado from "./components/teclado";

export interface User {
  name: string;
  email: string;
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState<User | null>(null);
  const removeUser = () => {
    setUser(null);
    setIsLoggedIn(false);
    setFormData({ email: "", password: "" });
  };

  // Função para validar email básico
  const isValidEmail = (emailPrefix: string) => {
    // Verifica se tem pelo menos 3 caracteres e não contém espaços ou caracteres especiais inválidos
    const emailRegex = /^[a-zA-Z0-9._-]+$/;
    return emailPrefix.length >= 3 && emailRegex.test(emailPrefix);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      // Remove espaços e caracteres especiais inválidos
      const cleanValue = value.replace(/[^a-zA-Z0-9._-]/g, "").toLowerCase();
      setFormData((prev) => ({ ...prev, [name]: cleanValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validações básicas
    if (!isValidEmail(formData.email)) {
      alert("Por favor, insira um email válido (mínimo 3 caracteres)");
      return;
    }

    if (formData.password.length < 4) {
      alert("A senha deve ter pelo menos 4 caracteres");
      return;
    }

    // Simulando autenticação
    setIsAnimating(true);

    setTimeout(() => {
      const fullEmail = `${formData.email}@soudaliga.com.br`;
      setUser({
        name: "João Silva",
        email: fullEmail,
      });
      setIsLoggedIn(true);
      setIsAnimating(false);
    }, 800);
  };

  if (isLoggedIn) {
    return <Panel user={user} removeUser={removeUser} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center p-4 font-poppins">
      <div
        className={`grid grid-cols-[1fr_18rem] gap-6 w-[48rem] bg-red transform transition-all duration-500 ${
          isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"
        }`}
      >
        <div className={`w-full bg-black rounded-2xl shadow-2xl p-8 `}>
          {/* Header do Login */}
          <div className="text-center">
            <img
              src="/public/pdv-sdl.svg"
              alt="Logo"
              className="w-42  mx-auto"
            />
          </div>

          {/* Formulário */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-500 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="usuario"
                  className="font-poppins w-full pl-12 pr-4 py-2 border text-lg  text-zinc-200 border-zinc-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all focus:outline-none"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 text-lg pointer-events-none">
                  @soudaliga.com.br
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-500 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Digite sua senha"
                  className="font-poppins w-full pl-12 pr-4 py-2 border text-lg  text-zinc-200 border-zinc-500 rounded-lg  focus:border-transparent transition-all focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              disabled={isAnimating}
              className={`font-poppins w-full py-3 px-4 mt-4 bg-gradient-to-r from-zinc-400 to-gray-300 text-black font-semibold rounded-lg shadow-lg transition-all transform ${
                isAnimating
                  ? "scale-95 opacity-50 cursor-not-allowed"
                  : "hover:shadow-xl hover:scale-105 active:scale-95"
              }`}
            >
              {isAnimating ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </div>
        <div className="w-full  bg-black rounded-2xl shadow-2xl p-8">
          <Teclado/>
        </div>
      </div>
    </div>
  );
};

export default App;
