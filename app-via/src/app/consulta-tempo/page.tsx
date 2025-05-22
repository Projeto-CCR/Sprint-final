"use client";

import { useState } from 'react';

export default function ConsultaTempoPage() {
  const estacoesLinha8 = [
    "Amador Bueno", "Santa Rita", "Itapevi", "Eng. Cardoso", "Sagrado Coração",
    "Jandira", "Jardim Silveira", "Jardim Belval", "Barueri", "Antônio João",
    "Santa Terezinha", "Carapicuíba", "Gen. Miguel Costa", "Quitaúna", "Com. Sampaio",
    "Osasco", "Pres. Altino", "Imperatriz Leopoldina", "Domingos de Moraes", "Lapa",
    "Palmeiras • Barra Funda", "Júlio Prestes"
  ];

  const estacoesLinha9 = [
    "Osasco", "Pres. Altino", "Ceasa", "Villa-Lobos • Jaguaré", "Cidade Universitária",
    "Pinheiros", "Hebraica • Rebouças", "Cidade Jardim", "Vila Olímpia", "Berrini",
    "Morumbi", "Granja Julieta", "João Dias", "Santo Amaro", "Socorro", "Jurubatuba",
    "Autódromo", "Primavera • Interlagos", "Grajaú", "Mendes • Vila Natal"
  ];

  const sentidosLinha8 = ["Itapevi", "Júlio Prestes"];
  const sentidosLinha9 = ["Grajaú", "Osasco"];

  const [linhaSelecionada, setLinhaSelecionada] = useState<'8' | '9'>('8');
  const [estacaoSelecionada, setEstacaoSelecionada] = useState('');
  const [sentidoSelecionado, setSentidoSelecionado] = useState('');
  const [tempo, setTempo] = useState<number | null>(null);
  const [diaSemana, setDiaSemana] = useState<number | null>(null);

  const diasSemanaTexto = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  const consultarTempo = () => {
    const hoje = new Date();
    const dia = hoje.getDay();  // 0 = Domingo
    setDiaSemana(dia);

    let tempoEstimado = 0;
    if (dia === 0) {
      tempoEstimado = 12;
    } else if (dia === 6) {
      tempoEstimado = 10;
    } else {
      tempoEstimado = 8;
    }

    setTempo(tempoEstimado);
  };

  const estacoes = linhaSelecionada === '8' ? estacoesLinha8 : estacoesLinha9;
  const sentidos = linhaSelecionada === '8' ? sentidosLinha8 : sentidosLinha9;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Consulta de Tempo de Espera</h1>

      <div className="mb-4">
        <label className="block mb-1">Selecione a Linha:</label>
        <select
          value={linhaSelecionada}
          onChange={(e) => {
            setLinhaSelecionada(e.target.value as '8' | '9');
            setEstacaoSelecionada('');
            setSentidoSelecionado('');
          }}
          className="p-2 border rounded w-full"
        >
          <option value="8">Linha 8 - Diamante</option>
          <option value="9">Linha 9 - Esmeralda</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Selecione a Estação:</label>
        <select
          value={estacaoSelecionada}
          onChange={(e) => setEstacaoSelecionada(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">Selecione uma estação</option>
          {estacoes.map((estacao, index) => (
            <option key={index} value={estacao}>{estacao}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Selecione o Sentido:</label>
        <select
          value={sentidoSelecionado}
          onChange={(e) => setSentidoSelecionado(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">Selecione um sentido</option>
          {sentidos.map((sentido, index) => (
            <option key={index} value={sentido}>{sentido}</option>
          ))}
        </select>
      </div>

      <button
        onClick={consultarTempo}
        disabled={!estacaoSelecionada || !sentidoSelecionado}
        className={`px-4 py-2 rounded text-white ${
          estacaoSelecionada && sentidoSelecionado ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Consultar
      </button>

      {tempo !== null && diaSemana !== null && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <p><strong>Estação Selecionada:</strong> {estacaoSelecionada}</p>
          <p><strong>Linha:</strong> {linhaSelecionada === '8' ? 'Diamante' : 'Esmeralda'}</p>
          <p><strong>Sentido:</strong> {sentidoSelecionado}</p>
          <p><strong>Tempo Estimado:</strong> {tempo} minutos</p>
          <p><strong>Dia da Semana:</strong> {diasSemanaTexto[diaSemana]}</p>
        </div>
      )}
    </div>
  );
}