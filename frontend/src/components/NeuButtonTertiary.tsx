import checkIcon from '../assets/check-icon.png';

type Props = {
    selected?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
};

export default function NeuButtonTertiary({ selected, onClick, style }: Props) {
    return (
        <button
        onClick={onClick}
        className={`neu-button-tertiary ${selected ? 'selected' : ''}`}
        style={style}
        >
            {selected && <img src={checkIcon} alt="check" className="check-icon" />}
        </button>
    )
}