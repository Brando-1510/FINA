
type Props = {
  label: string;
  onClick?: () => void;
  selected?: boolean;
  style?: React.CSSProperties;
};

export default function NeumorphicButton({ label, onClick, style}: Props) {
  
  return (
    <button

      onClick={onClick}
      className="neu-button"
      style={style}
      
      // onMouseEnter={(e) => {
      //   if (!selected) e.currentTarget.style.boxShadow = 'inset 4px 4px 4px rgba(0, 0, 0, 0.25), inset -3px -3px 5px #ffffff';
      // }}
      // onMouseLeave={(e) => {
      //   if (!selected) e.currentTarget.style.boxShadow = '5px 5px 4px rgba(0, 0, 0, 0.25), -3px -3px 5px #ffffff';
      // }}
      
    >
      {label}
    </button>
  );
}
