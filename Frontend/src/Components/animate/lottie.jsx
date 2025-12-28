import Lottie from "lottie-react";
import animationData from '../../assets/loader.json';

function Loader() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-transparent">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 140, height: 140 }}
      />
    </div>
  );
}

export default Loader;
