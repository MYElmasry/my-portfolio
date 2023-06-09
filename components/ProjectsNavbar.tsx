import { Category } from "@/type";
import { FunctionComponent } from "react";

const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    active === value
      ? "capitalize cursor-pointer text-green"
      : "capitalize cursor-pointer hover:text-green";
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="javascript" {...props} />
      <NavItem value="typescript" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
