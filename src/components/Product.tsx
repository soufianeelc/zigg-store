import { IconButton } from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export interface IproductProps {
  id: string;
  name: string;
  price: string;
  image: string;
}

export default function Product(props: IproductProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-80 rounded-lg relative overflow-hidden">
        <img
          src={props.image}
          alt={props.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <span className="bg-red-700 font-bold uppercase absolute text-white text-xs top-2 left-2 rounded-md px-4 py-1">
          Sale
        </span>
      </div>

      <div className="flex justify-between">
        <div className="w-fit">
          <h2 className="text-lg font-medium text-gray-700">{props.name}</h2>

          <p className="text-2xl font-bold">{props.price}$</p>
        </div>

        <IconButton
          className="bg-neutral-900  flex items-center justify-center bg-black text-white"
          ripple={true}
        >
          <ShoppingCartIcon className="w-6 h-6" />
        </IconButton>
      </div>
    </div>
  );
}
