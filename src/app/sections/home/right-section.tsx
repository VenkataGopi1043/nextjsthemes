import BottomRightSection from "./bottom-right-section";
import MiddleRightSection from "./middle-right-section";
import TopRightSection from "./top-right-section";

export default function RightSection() {
  return (
    <div className="w-6/10 bg-blue-300">
      <TopRightSection />
      <MiddleRightSection />
      <BottomRightSection />
    </div>
  );
}
