import { ChevronLeft } from "lucide-react";
import { apiSevice } from "../service/api";
import { useState } from "react";

interface Pedido {
  numeroPedidoItemX: string;
  pedidoItemBeneficiario: {
    pedidoItemBeneficiarioID: string;
    nomeBeneficiario: string;
  }[];
  pedidoItemID: string;
}
interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pedidos(Props: Props) {
  const [pedidoId, setPedidoId] = useState("");
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const buscarPedido = async () => {
    await apiSevice.getPedidos(pedidoId).then((data) => {
      console.log(data);
      setPedidos(data);
    });
  };
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setPedidoId(event.target.value);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-700 ">
        <div className="flex items-center justify-end mb-8 ">
          <button
            onClick={() => Props.setPage(1)}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>
        </div>
        <h3 className="text-2xl justify-center m-4">Buscar pedido</h3>
        <div className="mx-auto mb-8">
          <input
            className="border border-gray-400 rounded-md px-4 py-2 "
            type="text"
            onChange={handleInput}
          />
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 ml-3"
            onClick={buscarPedido}
          >
            Buscar
          </button>
        </div>
        {pedidos.length > 0 && (
          <div >
            {pedidos.map((item) => {
              return (
                <div key={item.pedidoItemID} className="bg-gray-100 rounded-md px-4 py-2 my-2 ">
                  <p><strong className="text-lg mr-2 font-medium">Beneficiario: </strong>{item.pedidoItemBeneficiario[0].nomeBeneficiario}</p>
                  <p><strong className="text-lg mr-2 font-medium">Pedido: </strong>{item.numeroPedidoItemX}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
