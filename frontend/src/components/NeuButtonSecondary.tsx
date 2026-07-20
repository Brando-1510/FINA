type Props = {
  label: string;
  onClick?: () => void;
  selected?: boolean;
  style?: React.CSSProperties;
};

export default function NeuButtonSecondary({ label, onClick, selected, style}: Props) {
    
    return (
      <button
        onClick={onClick}
        className={`neu-button-secundary ${selected ? 'selected' : ''}`}
        style={style}
      >
        {label}
      </button>
    );
}