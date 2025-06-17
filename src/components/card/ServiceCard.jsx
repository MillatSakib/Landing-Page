import Svg from "../svg/Svg";

function ServiceCard({ data }) {
  return (
    <div>
      <Svg image={data.svg} />
      <h3 className="mb-2 text-2xl font-bold dark:text-white">{data.title}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400">
        {data.description}
      </p>
    </div>
  );
}
export default ServiceCard;
