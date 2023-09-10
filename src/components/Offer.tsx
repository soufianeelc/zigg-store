import { GiftIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function Offer() {
  const backgroundStyles = {
    backgroundImage: "url(/slider-images/image-1.webp)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="px-4">
      <section
        className="container max-w-6xl mt-24 h-96 rounded-xl bg-gray-800 bg-blend-overlay px-16 flex items-center"
        style={backgroundStyles}
      >
        {/* Overlay */}

        {/* Content */}
        <div className="flex flex-col items-center md:items-start">
          <p className=" uppercase text-gray-300">Limited Offer</p>
          <h1 className="text-2xl mt-2 text-white md:text-4xl max-w-lg text-center md:text-start">
            Benefit from 35% OFF this friday and get a special Offer!
          </h1>

          <Button
            variant="filled"
            color="white"
            className="mt-4 w-fit rounded-full flex items-center space-x-2"
          >
            <GiftIcon className="w-5 h-5" />
            <span>Get Offer</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
