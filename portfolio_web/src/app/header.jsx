import dynamic from "next/dynamic"
const Header = () => {
    return(
        <div className="flex items-center flex-col mt-20 flex-shrink text-center">
            <div className="font-bold text-xl text-center">Welcome to my Website!</div>   
            <div>I am a aspiring software engineer and current student and the University of Houston</div>
        </div>
    )
}
export default dynamic (() =>Promise.resolve(Header),{ssr:false})
