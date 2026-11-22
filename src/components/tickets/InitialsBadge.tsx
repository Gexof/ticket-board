import getInitials from "../../utils/getInitials";

interface IProps {
  name: string;
}

const InitialsBadge = ({ name }: IProps) => {
  return (
    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 p-2 flex items-center justify-center">
      {getInitials(name)}
    </div>
  );
};

export default InitialsBadge;
