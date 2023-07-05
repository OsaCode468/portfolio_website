import Link from "next/link"
import dynamic from "next/dynamic"
const navbar = () => {
    return (<div>
        <li className = "list-none flex flex-wrap gap-10 justify-center items-center bg-emerald-300 h-32 font-sans">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#resume">Resume</Link>
        </li>
    </div>)
}
export default dynamic (() =>Promise.resolve(navbar),{ssr:false})
