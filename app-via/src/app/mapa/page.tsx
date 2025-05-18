import Image from "next/image";
import img02 from "@/img/img-02.jpg";

export default function Mapa(){

  return( 
    //Área declarativa
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[500px]">
        <Image 
          src={img02} 
          alt="Mapa-Metropolitano" 
          width={500} 
          height={500} 
          className="object-contain"
        />
      </div>
    </div>
  );
}