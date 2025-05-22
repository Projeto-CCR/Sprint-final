"use client";

import { useEffect, useState } from 'react';

interface StatusLinhaProps {
  linha: number;  // Deve ser 8 ou 9
}

export default function StatusLinha({ linha }: StatusLinhaProps) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const buscarStatus = async () => {
      try {
        const response = await fetch('/api/status-linha'); // Proxy Next.js
        const data = await response.json();

        // Como a API retorna: ["Operação Normal", "Operação Normal"]
        const index = linha === 8 ? 0 : 1;  // Linha 8 → posição 0 | Linha 9 → posição 1
        setStatus(data[index] || 'Status indisponível');

      } catch (error) {
        console.error('Erro ao buscar status da linha:', error);
        setStatus('Erro ao consultar');
      }
    };

    buscarStatus();
  }, [linha]);  // Sempre que a linha mudar, faz nova consulta

  const getStatusColor = () => {
    if (status === 'Operação Normal') {
      return 'text-green-500';
    } else if (status === 'Status indisponível' || status === 'Erro ao consultar') {
      return 'text-gray-500';
    } else {
      return 'text-red-500';
    }
  };

  return (
    <span className={`font-semibold ${getStatusColor()}`}>
      {status}
    </span>
  );
}