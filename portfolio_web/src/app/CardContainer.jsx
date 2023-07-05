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
        <div className="flex justify-center items-center gap-10 flex-wrap">
            {items}
        </div>
    )
}
export default dynamic(() => Promise.resolve(CardContainer), { ssr: false });