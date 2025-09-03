import { useState } from "react";
import {  Home, LogOut,} from "lucide-react";
import "../App.css";
import type { User } from "../App";
import { apiSevice } from "../service/api";
import Pedidos from "./pedidos";
import QRCODE from "./qrCode";

interface Props {
  user: User | null;
  removeUser: () => void;
}

const Panel = ({ user, removeUser }: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [page, setPage] = useState(1);

  const handleLogout = () => {
    apiSevice.LogOut();
    setIsAnimating(true);

    setTimeout(() => {
      removeUser();

      setIsAnimating(false);
    }, 500);
  };
  // página pedidos
  if (page === 2) {
    return (
      <Pedidos
		setPage={setPage}
	  />
    );
  }
  if (page === 3) {
    return (
      <QRCODE
		setPage={setPage}
		/>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center p-4">
      <div
        className={`w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-700 ${
          isAnimating
            ? "translate-x-full opacity-0"
            : "translate-x-0 opacity-100 animate-slide-in-left"
        }`}
      >
        {/* Header da Home */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-zinc-500 to-gray-600 rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bem-vindo!</h1>
              <p className="text-gray-600">Painel Principal</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sair</span>
          </button>
        </div>

        {/* Informações do usuário */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Informações do Usuário
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-gray-700">
                <strong>Nome:</strong> {user?.nome}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-700">
                <strong>Email:</strong> {user?.email}
              </span>
            </div>
          </div>
        </div>

        {/* Cards de funcionalidades */}
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => setPage(2)}
            className="bg-blue-50 p-6 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
          >
            <h3 className="font-semibold text-blue-800 mb-2">Buscar pedido</h3>
          </button>
          <button
            onClick={() => setPage(3)}
            className="bg-blue-50 p-6 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
          >
            <h3 className="font-semibold text-blue-800 mb-2">Ler QRCODE</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panel;
