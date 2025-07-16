import HeaderTitle from "./HeaderTitle";
import MembersIcon from "./Members";
import Name from "./Name";

const Header = () => {
  return (
    <div className="flex flex-row justify-between p-2">
      <div className="flex flex-row text-primary gap-2">
        <HeaderTitle />
        <Name />
      </div>
      <MembersIcon />
    </div>
  );
};

export default Header;
