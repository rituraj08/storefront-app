type ButtonProps = {
    text: string;
    onClick: () => void;
    width? : string
  };
  
  const Button = ({ text, onClick, width }: ButtonProps) => (
    <button style={{width, "paddingLeft" : 10}} onClick={onClick}>{text}</button>
  );
  
  export default Button;