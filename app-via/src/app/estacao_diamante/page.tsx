import Botao from "@/components/Botao/Botao";

export default function EstacaoDiamantePage() {
    return (
        <div className="bg-gray-100 py-8 px-4 flex flex-col">
        {/* Detalhes da Linha */}
        <section className="detalhes-linha bg-gray-600 text-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto flex items-center">
          <div className="numero-linha bg-gray-400 text-white text-4xl font-bold p-3 rounded-full mr-6">
            8
          </div>
          <div>
            <h2 className="text-2xl font-semibold me-4">Diamante</h2>
            <p className="text-lg me-4">Operação Normal</p>
          </div>
          <div className="">
            <Botao />
          </div>
        </section>
  
        {/* Lista de Estações */}
        <section className="lista-estacoes max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="coluna">
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Júlio Prestes</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Palmeiras-Barra Funda</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Lapa</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Domingos de Moraes</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Imperatriz Leopoldina</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Presidente Altino</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Osasco</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Comandante Sampaio</div>
          </div>
  
          <div className="coluna">
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Quitaúna</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">General Miguel Costa</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Carapicuíba</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Santa Terezinha</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Antonio João</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Barueri</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Jardim Belval</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Jardim Silveira</div>
          </div>
  
          <div className="coluna">
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Jandira</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Sagrado Coração</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Engenheiro Cardoso</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Itapevi</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Santa Rita</div>
            <div className="estacao bg-gray-600 text-white p-4 rounded-lg shadow-md mb-4">Amador Bueno</div>
          </div>
        </section>
      </div>
    );
  }
  