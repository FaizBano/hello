import Image from "next/image";

export default function Home() {
  return (

    <div className="flex justify-center mt-40 font-bold size-40% gap-20 mt-50 text-nowrap h-screen place-content-center text-4xl">
      <h1 className="size-45 mt-14 "> Hello World</h1>

    <div>  
        <Image src="/pic3.jpg"
        alt="pic"
        width={150}
          height={150}
          className="rounded-full w-45 h-62"
        />
      </div>
      </div>
      
          


  );
}
