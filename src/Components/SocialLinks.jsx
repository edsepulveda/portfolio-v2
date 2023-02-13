import { BsTwitter, BsLinkedin } from "react-icons/bs";

export const SocialLinks = () => {
  return (
    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
      <ul className="flex flex-row mt-10 gap-5 justify-center items-center">
        <a
          href="https://www.linkedin.com/in/ed-sepulveda-narvaez"
          target="_blank"
          className="hover:opacity-25 hover:scale-125 transition duration-500"
        >
          <BsLinkedin color="#0077b5" size={35} />
        </a>
      </ul>
    </div>
  );
};
