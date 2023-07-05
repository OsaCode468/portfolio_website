import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link"
const Card = ({ title, description, image, link }) => {
  return (
    <div className="flex justify-center items-start h-screen mt-32">
      <div className="flex flex-col items-center h-[400px] w-[270px] bg-black hover:bg-teal-400 transition ease-in-out delay-200 rounded-2xl">
        <Image src={image} width={270} height={150} />
        <div className = "pt-10 text-white flex flex-col justify-center items-center"> 
            <div className = "text-2xl font-bold">{title}</div>
            <div className = "text-center">{description}</div>
        </div>
        <div className="text-white pt-24">
            <Link href = {link} target = "_blank">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Card), { ssr: false });