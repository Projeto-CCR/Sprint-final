import Link from "next/link";
export default function Botao() {
  
    return (
        <div className="space-x-4">
          <Link
            href="/estacao_diamante"  // Usando 'href' para navegar
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-all"
          >
            8 Diamante
          </Link>
          <Link
            href="/estacao_esmeralda"  // Usando 'href' para navegar
            className="px-4 py-2 bg-[#0FFFBB] text-white rounded-md hover:bg-[#0B9C73] transition-all"
          >
            9 Esmeralda
          </Link>
        </div>
      );
}