import Category from "./Category";

export default function Categories() {
  return (
    <section className="my-24 px-4 container max-w-6xl flex flex-col gap-20">
      <h1 className="text-4xl font-semibold">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Category title="Best Seller" imgPath="/slider-images/image-1.webp" />
        <Category title="Men" imgPath="/slider-images/image-3.webp" />
        <Category title="Women" imgPath="/category-woman.webp" />
        <Category title="Casual" imgPath="/casual-category.avif" />
      </div>
    </section>
  );
}
