import Link from "next/link"
import dynamic from "next/dynamic"
const navbar = () => {
    return (<div>
        <li className = "list-none flex flex-wrap gap-10 justify-center items-center bg-teal-400 h-32 font-sans">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
            <Link href="./Osaid_Mohammad_Resume.pdf">Resume</Link>
        </li>
    </div>)
}
export default dynamic (() =>Promise.resolve(navbar),{ssr:false})
