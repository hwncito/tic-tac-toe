import '../app/animations.css'
export default function ResetButton({handleReset}) {
  return (
    <button onClick={handleReset} className="button-effect bg-slate-950 rounded-xl relative text-base h-[40px] w-[130px]">Play Again</button>
  )
}
