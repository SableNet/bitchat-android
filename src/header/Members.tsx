import { User } from "lucide-react";

const MembersIcon = ({
  numberOfMembers,
}: {
  numberOfMembers: number | null;
}) => {
  return (
    <div className="flex flex-row text-red-500 items-center">
      <span className="mr-1 text-xl">
        {numberOfMembers !== null ? numberOfMembers : 0}
      </span>
      <User fill="red" stroke="red" />
    </div>
  );
};

export default MembersIcon;
