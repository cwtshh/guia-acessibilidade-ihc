interface HeuristicaCardProps {
  heuristica: {
    name: string;
    content: string;
    num: number;
  };
}

const HeuristicaCard = ({ heuristica }: HeuristicaCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
        <h2 className="card-title text-lg md:text-xl font-semibold">
          {`${heuristica.num} - ${heuristica.name}`}
        </h2>
      </div>
      <div className="card-body">
        <p className="text-sm md:text-base text-gray-700">
          {heuristica.content}
        </p>
      </div>
    </div>
  );
};

export default HeuristicaCard;
