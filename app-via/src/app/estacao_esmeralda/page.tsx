import Botao from "@/components/Botao/Botao";

export default function EstacaoEsmeraldaPage() {
    return (
        <div className="bg-gray-100 py-8 px-4 flex flex-col">
        {/* Detalhes da Linha */}
        <section className="detalhes-linha bg-gray-600 text-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto flex items-center">
          <div className="numero-linha bg-[#0FFFBB] text-white text-4xl font-bold p-3 rounded-full mr-6">
            9
          </div>
          <div>
            <h2 className="text-2xl font-semibold me-4">Esmeralda</h2>
            <p className="text-lg me-4">Operação Normal</p>
          </div>
          <div className="">
            <Botao />
          </div>
        </section>
  
        {/* Lista de Estações */}
        <section className="lista-estacoes max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="coluna">
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Osasco</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Presidente Altino</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Ceasa</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Vila Lobos-Jaguaré</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Cidade Universitária</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Pinheiros</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Hebraica-Rebouças</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Cidade Jardim</div>
          </div>
  
          <div className="coluna">
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Vila Olímpia</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Berrini</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Morumbi</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Granja Julieta</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">João Dias</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Santo Amaro</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Socorro</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Jurubatuba</div>
          </div>
  
          <div className="coluna">
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Jandira</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Primavera-Interlagos</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Grajaú</div>
            <div className="estacao bg-[#0FFFBB] text-white p-4 rounded-lg shadow-md mb-4">Mendes-Vila Natal</div>
          </div>
        </section>
      </div>
    );
  }
  