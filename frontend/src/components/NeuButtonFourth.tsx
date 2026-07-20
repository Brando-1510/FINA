type Props = {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};


export default function NeuButtonFourth({ label, onClick, style }: Props) {

    return (
        <button
          onClick={onClick}
          className={"neu-button-fourth"}
          style={style}
        >
          {label}

        </button>
    );
}