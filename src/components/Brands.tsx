import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <section className="mt-24 container max-w-6xl flex flex-col px-6 gap-8">
      <h1 className="text-3xl md:text-4xl font-semibold">Brands</h1>

      <Marquee gradient>
        <img src="/logos/nike.svg" alt="nike's logo" className="w-16 mr-16 " />
        <img
          src="/logos/versace.svg"
          alt="nike's logo"
          className="w-16 mr-16 "
        />
        <img
          src="/logos/adidas.svg"
          alt="nike's logo"
          className="w-16 mr-16 "
        />
        <img src="/logos/boss.svg" alt="nike's logo" className="w-16 mr-16 " />
        <img
          src="/logos/chanel.svg"
          alt="nike's logo"
          className="w-16 mr-16 "
        />
        <img src="/logos/puma.svg" alt="nike's logo" className="w-16 mr-16 " />
        <img
          src="/logos/the-north-face.svg"
          alt="nike's logo"
          className="w-16 mr-16 "
        />
        <img src="/logos/puma.svg" alt="nike's logo" className="w-16 mr-16 " />
        <img src="/logos/d&g.svg" alt="nike's logo" className="w-16 mr-16 " />
        <img
          src="/logos/converse.svg"
          alt="nike's logo"
          className="w-16 mr-16 "
        />
      </Marquee>
    </section>
  );
}
