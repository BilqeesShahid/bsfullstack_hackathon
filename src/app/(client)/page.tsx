
import Container from "@/components/Container";
import BestSell from "../../components/BestSell";
import Hero from "../../components/Hero";
import { getAllCategories,getHero} from "@/sanity/helpers";
  
import Featured from "@/components/Featured";
import DontMiss from "@/components/DontMiss";
import Essentials from "@/components/Essentials";
import CategorySelector from "@/components/ui/CategorySelector";

export default async function Home() {
  const heros = await getHero();

  const categories = await getAllCategories();


  return (
    <div>
       <Container className="pb-10"> 
       <Hero heros = {heros}/>
       <CategorySelector categories={categories} />
       <BestSell/>
        <Featured/>
        <DontMiss/>
        <Essentials/>
        </Container>
    </div>
  );
}
