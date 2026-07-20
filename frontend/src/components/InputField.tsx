// type Props = {
//   children: React.ReactNode;
//   className?: string;
//   placeholder?: string;
// };

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({ placeholder, value, onChange }: Props) {
  return (
    <input
      className="input-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

// export default function InputField({ children, className } : Props ) {
//     return (
//         <div className={`input-field ${className || ''}`}>
//             {children}
//         </div>

//     )
// }