import data from "../data/products.json";
import Product from "./Product";
import { Button } from "@material-tailwind/react";

export default function Products() {
  return (
    <section className="my-24 px-6 container max-w-6xl flex flex-col gap-20">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Featured Products</h1>

        <Button className="rounded-full">View All</Button>
      </div>
      <div
        className="grid grid-cols-1 
      md:grid-cols-3 gap-8"
      >
        {data.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
