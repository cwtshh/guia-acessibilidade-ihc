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
      <div className="card-body">
        <h2 className="card-title text-lg md:text-xl font-semibold">
          {`${heuristica.num} - ${heuristica.name}`}
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          {heuristica.content}
        </p>

        <button className="btn bg-primary-600 mt-4">Detalhes</button>
      </div>
    </div>
  );
};

export default HeuristicaCard;
