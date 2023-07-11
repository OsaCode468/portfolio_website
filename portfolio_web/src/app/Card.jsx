import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="flex justify-center items-start">
      <div className="flex flex-col items-center h-[400px] w-[270px] bg-black hover:bg-teal-400 transition ease-in-out delay-150 rounded-2xl relative">
        <div className="rounded-2xl">
          <Image
            className="rounded-t-2xl max-h-[150px] overflow-hidden"
            src={image}
            width={270}
            height={150}
            layout="fixed"
          />
        </div>
        <div className="text-white flex flex-col justify-center items-center flex-wrap">
          <div className="text-2xl font-bold text-center">{title}</div>
          <div className="text-center px-4">{description}</div>
          <div className="flex-grow"></div> {/* Add this line */}
        </div>
        <div className="text-white absolute bottom-0 left-0 w-full py-4 text-center">
          <Link href={link} target="_blank">Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Card), { ssr: false });