import { AiFillGithub } from "react-icons/ai";
import { HiOutlineDocument } from "react-icons/hi";

export const Buttons = () => {
  return (
    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
      <a
        rel="noopener noreferrer"
        href="https://bit.ly/3YsxjgN"
        target='_blank'
        className="flex flex-row gap-5 justify-center px-8 py-3 text-lg font-semibold rounded-md shadow-lg border focus:outline-transparent hover:bg-[#FC575E] hover:border-[#FC575E] focus:bg-[#FC575E] transition duration-500"
      >
        <HiOutlineDocument className="self-center" /> Resume
        
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/edsepulveda"
        target='_blank'
        className="flex flex-row gap-5 justify-center px-8 py-3 text-lg font-semibold rounded-md shadow-lg border focus:outline-transparent hover:bg-[#FC575E] hover:border-[#FC575E] focus:bg-[#FC575E] transition duration-500"
      >
        <AiFillGithub className="self-center" /> Github
      </a>
    </div>
  );
};
