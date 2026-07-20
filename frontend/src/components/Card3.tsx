type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Card3({ children, className, style }: Props) {
  return <div className={`card3 ${className || ''}`} style={style}>{children}</div>;
}
