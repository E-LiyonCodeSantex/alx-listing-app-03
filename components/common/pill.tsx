interface PillProps {
  label: string;
  isActive: boolean;
  onClick: (label: string) => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`px-3 py-1 text-xs xs:text-sm rounded-full border transition-colors duration-300
        ${isActive ? "border-emeraldTint text-emeraldTint" : "border-gray-700 text-gray-700 hover:border-emeraldTint hover:text-emeraldTint"}`}
    >
      {label}
    </button>
  );
};

export default Pill;
