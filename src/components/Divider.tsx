interface DividerProps {
  text?: string;
  className?: string;
  textAlign?: "left" | "center" | "right";
}

const Divider: React.FC<DividerProps> = ({
  text,
  className = "",
  textAlign = "",
}) => {
  if (text) {
    switch (textAlign) {
      case "left":
        return (
          <div className={`flex items-center gap-4 ${className}`}>
            <span className="text-text-text-secondary-gray-gray text-sm">
              {text}
            </span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
        );
      case "center":
        return (
          <div className={`flex items-center gap-4 ${className}`}>
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-text-text-secondary-gray text-sm">
              {text}
            </span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
        );
      case "right":
        <div className={`flex items-center gap-4 ${className}`}>
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-text-text-secondary-gray text-sm">{text}</span>
        </div>;
    }

    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="h-px bg-gray-300 flex-1"></div>
        <span className="text-text-text-secondary-gray text-sm">{text}</span>
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
    );
  } else {
    return <hr className="text-border" />;
  }
};

export default Divider;
