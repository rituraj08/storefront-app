
interface TextInputProps {
    onChange: (e: any) => void;
    value: string;
    placeholder?: string;
}
const TextInput = ({ onChange, value, placeholder }: TextInputProps) => {
  const onChangeChangeHandler = (e: any) => {
    onChange(e);
  };
  return (
    <div className="textInput">
      <input
      type="text"
      value={value}
      onChange={onChangeChangeHandler}
      placeholder={placeholder}
      style={{width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px"}}
    />
    </div>
   
  );
};

export default TextInput;
