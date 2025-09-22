interface DividerProps {
  text?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ text, className = "" }) => {
  if (text) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="h-px bg-gray-300 flex-1"></div>
        <span className="text-gray-500 text-sm">{text}</span>
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
    );
  } else {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
    );
  }
};

export default Divider;
