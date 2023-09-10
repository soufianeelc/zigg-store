import { ArrowRightIcon } from "@heroicons/react/24/solid";

export interface ICategoryProps {
  imgPath: string;
  title: string;
}
export default function ({ imgPath, title }: ICategoryProps) {
  const backgroundStyles = {
    backgroundImage: `url(${imgPath})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="h-72 w-full rounded-lg relative border-2 border-neutral-300"
      style={backgroundStyles}
    >
      <a
        href="#"
        className="absolute flex items-center px-6 py-2 space-x-2 right-4 bottom-4 bg-white font-medium rounded-lg"
      >
        <span>{title}</span>
        <ArrowRightIcon className="w-4 h-4" />
      </a>
    </div>
  );
}
