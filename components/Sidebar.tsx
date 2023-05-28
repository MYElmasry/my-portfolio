import Avatar from "../public/images/me.jpg";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
type Props = {};

const Sidebar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Image
        src={Avatar}
        alt="user avatar"
        width={128}
        height={128}
        className="mx-auto rounded-full"
        priority
      />
      <h3 className="my-4 font-medium tracking-wider text-3 font-kaushan">
        <span className="text-green">Mohamed</span> Yasser
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 ">
        Frontend Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 "
        href="/assets/Mohamed Yasser Elmasry CV.pdf"
        download="Mohamed Yasser Elmasry CV.pdf"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a
          href="https://github.com/MYElmasry"
          target="_blank"
          aria-label="GitHub"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-elmasry8822/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 -ml-4 -mr-4 bg-gray-200 dark:bg-dark-200">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Alexandria, Egypt</span>
        </div>
        <p className="my-2">mo.yasser8822@gmail.com</p>
        <p className="my-2">+20 127 313 0124</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={() => window.open("mailto:mo.yasser8822@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
