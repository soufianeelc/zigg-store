import { Carousel, Button } from "@material-tailwind/react";

export default function Hero() {
  return (
    <main className="container mx-auto max-w-6xl mt-12 px-6">
      <Carousel className="relative rounded-xl h-96 md:h-[500px]">
        <div className="absolute h-full w-full">
          <img
            src="/slider-images/image-1.webp"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-gray-800/50">
            <div className="w-3/4 text-center md:w-2/4">
              <h1 className="text-2xl md:text-3xl lg:text-5xl text-white">
                Level up your style with our autumn collection
              </h1>
              <div className="flex justify-center gap-2 mt-4">
                <Button
                  size="md"
                  className="bg-[#CBFA70] text-black rounded-full"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-full w-full">
          <img
            src="/slider-images/image-2.webp"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-gray-800/50">
            <div className="w-3/4 text-center md:w-2/4">
              <h1 className="text-2xl md:text-3xl lg:text-5xl text-white">
                Level up your style with our autumn collection
              </h1>
              <div className="flex justify-center gap-2 mt-4">
                <Button
                  size="md"
                  className="bg-[#CBFA70] text-black rounded-full"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-full w-full">
          <img
            src="/slider-images/image-3.webp"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-gray-800/50">
            <div className="w-3/4 text-center md:w-2/4">
              <h1 className="text-2xl md:text-3xl lg:text-5xl text-white">
                Level up your style with our autumn collection
              </h1>
              <div className="flex justify-center gap-2 mt-4">
                <Button
                  size="md"
                  className="bg-[#CBFA70] text-black rounded-full"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </main>
  );
}
