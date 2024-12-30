import { HomeCarousel } from "@/components/shared/home/home-carousel";
import data from "@/lib/data";


export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <HomeCarousel items={data.carousels}/>
     
    </div>
  );
}
