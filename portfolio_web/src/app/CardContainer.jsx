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
        <div className="mt-32 flex justify-center items-center flex-wrap gap-10 " id = "project">
            {items}
        </div> 
    )
}
export default dynamic(() => Promise.resolve(CardContainer), { ssr: false });