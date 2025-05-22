import { NextResponse } from 'next/server';

// Função para interceptar as requisições GET para o proxy
export async function GET() {
  try {
    // Faz a requisição à API externa (Railway)
    const response = await fetch('https://api-ddd-sprint-production.up.railway.app/linhas/status', {
      headers: {
        'Accept': 'application/json'
      },
      cache: 'no-store'  // Evita cache de resposta
    });

    // Transforma a resposta em JSON
    const data = await response.json();

    // Retorna a resposta JSON para o frontend
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro no proxy da API:', error);
    return NextResponse.json(
      { error: 'Erro ao consultar API externa' },
      { status: 500 }
    );
  }
}