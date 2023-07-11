import dynamic from 'next/dynamic'
import Link from 'next/link'
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
const Contact = () => {
    return(
    <div className = "flex justify-center items-center mt-10" id = "contact">
        <div className = "flex-col bg-black h-[250px] w-[400px] rounded-2xl mb-[60px]">
                <div className = "flex items-center pb-16">
                    <AiOutlineMail className = "h-[75px] w-[75px] text-teal-400"/>
                    <p className = "text-2xl font-bold text-teal-400">
                        osho1525@gmail.com
                    </p>
                </div>
                <div className = "flex items-center">
                    <AiOutlineLinkedin className = "h-[75px] w-[75px] text-teal-400"/>
                    <Link href = "https://www.linkedin.com/in/osaid-mohammad/" className = "text-2xl font-bold text-teal-400" target = "_blank">
                        linkedin.com/in/osaid-mohammad
                    </Link>
                </div>
        </div>
    </div>)
}
export default dynamic(() => Promise.resolve(Contact), { ssr: false });
