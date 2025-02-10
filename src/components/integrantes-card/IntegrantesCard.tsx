import { FaGithub } from "react-icons/fa";

interface IntegrantesCardProps {
  integrante: {
    name: string;
    github_user: string;
    github_link: string;
    profile_image: string;
  };
}

const IntegrantesCard = ({ integrante }: IntegrantesCardProps) => {
  return (
    <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
      <figure className="p-4 rounded-2xl">
        <img
          src={integrante.profile_image}
          alt={integrante.name}
          className="rounded-t-lg object-cover w-full h-48 sm:h-56 md:h-64"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base sm:text-lg md:text-xl">
          {integrante.name}
        </h2>
        <p className="flex items-center gap-2 text-sm sm:text-base">
          {integrante.github_user}
          <a
            className="btn btn-ghost btn-sm"
            href={integrante.github_link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Perfil do Github de ${integrante.name}`}
          >
            <FaGithub className="text-xl sm:text-2xl" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default IntegrantesCard;
