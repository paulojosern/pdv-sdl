import { ChevronLeft } from "lucide-react";

interface Props {
        setPage: React.Dispatch<React.SetStateAction<number>>;
    }

export default function QRCODE(Props: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-700">
          <div className="flex items-center justify-end mb-8">
            <button
              onClick={() => Props.setPage(1)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>
          </div>

          <p>oioi</p>
        </div>
      </div>
    )
}