import Link from "next/link";
import Image from "next/image";
import img01 from "@/img/img-01.png"

export default function Menu() {
    return (
     <nav className="menu flex justify-between items-center px-6 py-4">
        <>
        <Image src={img01} alt="Logo" width={300} height={300} />
        </>
        <ul>
            <li className="inline p-10"><Link href="/">Home</Link></li>
            <li className="inline p-10"><Link href="/mapa">Mapa</Link></li>
            <li className="inline p-10"><Link href="/estacao">Estação</Link></li>
            <li className="inline p-10"><Link href="/consulta-tempo">Tempo Espera</Link></li>
            <li className="inline p-10"><Link href="/chatbot">Chat</Link></li>
        </ul>
     </nav>
    );
}