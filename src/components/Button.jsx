
const Button = ({text, onClick, outLine}) => {
    return (
      <button 
      className={`w-[220px] h-[44px] flex justify-center items-center rounded-md text-sm font-Poppins px-3 py-5 border-2 border-black font-bold
      ${outLine ? 'bg-white text-black hover:bg-black hover:text-white' : 'bg-black text-white hover:bg-white hover:text-black'}`}
      onClick={onClick}>{text}</button>
    )
  }
  
  export default Button