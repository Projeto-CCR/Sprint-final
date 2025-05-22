import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api-ddd-sprint-production.up.railway.app/linhas/status');
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro no proxy:', error);
    return NextResponse.json({ error: 'Erro ao consultar API' }, { status: 500 });
  }
}