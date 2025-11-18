import LeftSection from "./sections/home/left-section";
import MiddleSection from "./sections/home/middle-section";
import RightSection from "./sections/home/right-section";



export default function Home() {
  return (
    < div className= "flex">
      <LeftSection/>
      <MiddleSection/>
      <RightSection/>
    </div>
  );
}
