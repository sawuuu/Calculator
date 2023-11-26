export const Button = ({ text, className, onClick }) => {
  return (
    <button className={className} value={text} onClick={onClick}>
      {text}
    </button>
  );
};
