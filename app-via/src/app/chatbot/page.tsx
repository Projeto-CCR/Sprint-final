"use client";
import { useState } from "react";
import Image from "next/image";
import imgLogo from "@/img/img-03.png";
import imgEnviar from "@/img/img-05.png"
import imgAudio from "@/img/img-04.png"

export default function Chatbot() {
    const [mensagem, setMensagem] = useState("");

  return (
    <div className="flex flex-col">
      <section className="mensagem flex items-center bg-white p-4 rounded-t-3xl w-full fixed bottom-12 left-0 z-10">
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Mensagem"
          className="mensagem-input flex-1 p-2 border rounded-full bg-gray-100 mr-2"
        />
        <button className="botao-enviar rounded-full p-2">
          <Image src={imgEnviar} alt="Enviar" width={24} height={24} />
        </button>
        <button className="botao-audio rounded-full p-2">
          <Image src={imgAudio} alt="Áudio" width={24} height={24} />
        </button>
      </section>
    </div>
  );
}