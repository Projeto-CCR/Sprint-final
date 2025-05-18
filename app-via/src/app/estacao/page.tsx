import Botao from '../../components/Botao/Botao';

export default function EstacaoPage() {
  return (
    <div className='estacao-page'>
        <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl text-gray-700 font-bold mb-8">Estação</h1>
        <p className="text-lg mb-4 text-gray-700">Escolha uma opção:</p>
        <Botao />
        </div>
    </div>    
  );
}
