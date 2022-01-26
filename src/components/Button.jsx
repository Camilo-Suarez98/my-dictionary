
const Button = ({ onClick, text }) => {
  return (
    <button 
      className="pointer bg-sky-700 dark:bg-sky-900 font-bold mx-3 h-10 w-16 border-slate-50 border-2 rounded-2xl hover:bg-sky-500 hover:font-bold"
      type="button"
      onClick={onClick}
      text={text}>
      {text}
    </button>
  );
}

export default Button
