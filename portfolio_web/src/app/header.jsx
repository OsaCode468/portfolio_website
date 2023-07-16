import dynamic from "next/dynamic"
import Image from "next/image"
const Header = () => {
    return(
        <div className="flex items-center flex-col mt-20 flex-shrink text-center" id = "about">
            <div className="font-bold text-xl text-center">Welcome to my Website!</div>   
            <div>I am a aspiring software engineer and current student and the University of Houston</div>
            <Image src = "/banner_photo.jpg" width = {500} height = {50} className = "pt-[30px] rounded-2xl"></Image>
        </div>
    )
}
export default dynamic (() =>Promise.resolve(Header),{ssr:false})
