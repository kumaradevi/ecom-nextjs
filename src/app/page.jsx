

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-amber-100 w-full h-full">
    <div className="w-full h-[400px] relative flex justify-between  bg-amber-300 p-4 text-white">
      <div className="w-[60%] flex justify-center items-center flex-col gap-3">
          <h1 className="text-6xl font-bold ">Wonder Women Fest</h1>
          <p className="text-xl font-semibold">20-Apr-2025 to 20-May-2025</p>
          <span className="text-4xl font-bold">70% Offer</span>
          <Link href={'/products'}><button className="bg-amber-500 px-6 py-2 rounded-full font-bold shadow-md hover:bg-amber-600 transition cursor-pointer">Explore</button></Link>
      </div>
 <div className="w-[30%]">
 <Image
    src="/assets/ecom.webp"
    alt="hero image"
    width={300}
    height={300}
    className="object-cover "
  />
 </div>
</div>
</div>
  );
}
