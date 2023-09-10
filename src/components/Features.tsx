import Feature from "./Feature";
import {
  SparklesIcon,
  HeartIcon,
  TruckIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
export default function Features() {
  return (
    <section className="mt-24 px-6 container max-w-6xl flex flex-col gap-20">
      <h1 className="text-3xl md:text-4xl font-semibold">
        We provide best customer experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature
          title="Original Products"
          desc="Unique, handpicked fashion for bold, style-conscious individuals."
          Icon={SparklesIcon}
        />
        <Feature
          title="Satisfaction Guarantee"
          desc="Exchange the product you've purchased if it dosn't fit you."
          Icon={HeartIcon}
        />
        <Feature
          title="New Arrival Everyday"
          desc="We update our collection almost everyday."
          Icon={ShoppingCartIcon}
        />
        <Feature
          title="Fast & Free Shipping"
          desc="We offer fast and free shipping for our loyal customers."
          Icon={TruckIcon}
        />
      </div>
    </section>
  );
}
