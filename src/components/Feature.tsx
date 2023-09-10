export interface FeatureProps {
  title: string;
  desc: string;
  Icon: any;
}
export default function Feature({ title, desc, Icon }: FeatureProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-2 bg-gray-100 border border-gray-300 rounded-lg w-fit">
        {<Icon className="w-6 h-6 text-neutral-800" />}
      </div>
      <div className="flex flex-col space-y-2 5">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
