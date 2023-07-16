import dynamic from "next/dynamic";
import Card from "./Card";
import cards from "./data.js"
const items = cards.map((card)=>{
    return(
        <div key={card.title}>
            <Card title = {card.title} description = {card.description} image = {card.image} link = {card.link}/>
        </div>
    )
})
const CardContainer = () => {
    return(
        <div className = "mt-24 mb-24" id = "project"> 
            <div className = "text-4xl font-bold text-center">Projects</div>
            <div className="pt-10 flex justify-center items-center flex-wrap gap-10 ">
                {items}
            </div> 
        </div>
    )
}
export default dynamic(() => Promise.resolve(CardContainer), { ssr: false });