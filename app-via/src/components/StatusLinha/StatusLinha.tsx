"use client";

import { useEffect, useState } from 'react';

interface StatusLinhaProps {
  linha: number;  // 8 ou 9
}

export default function StatusLinha({ linha }: StatusLinhaProps) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const buscarStatus = async () => {
      try {
        const response = await fetch('/api/status-linha');
        const data = await response.json();

        // Como data é um array: ["Operação Normal", "Operação Normal"]
        const index = linha === 8 ? 0 : 1;
        setStatus(data[index] || 'Status indisponível');

      } catch (error) {
        console.error('Erro ao buscar status da linha:', error);
        setStatus('Erro ao consultar');
      }
    };

    buscarStatus();
  }, [linha]);

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
