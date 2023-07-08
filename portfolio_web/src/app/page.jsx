import dynamic from 'next/dynamic';
import Navbar from './navbar';
import Header from './header';
import Card from "./Card";
import Contact from "./Contact";
const DynamicCardContainer = dynamic(() => import("./CardContainer"), { ssr: false });
const DynamicCard = dynamic(() => import("./Card"), { ssr: false });
const HomePage = () => {
  return(
    <div>
      <Navbar/>
      <Header/>
      <DynamicCardContainer/>
      <Contact/>
      <Navbar/>
    </div> 
  )
}
export default HomePage;