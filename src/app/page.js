import Board from '@/components/Board';
import './animations.css'

export default function Home() {
  return (
    <main className="text-white">
      <h1 className="text-center text-4xl md:text-5xl font-medium my-20 md:mt-32">
        <span className='tic-span'>TIC</span> <span className='tac-span'>TAC</span> <span className='toe-span'>TOE</span>
      </h1>
      <div className='flex items-center justify-center board'>
        <Board />
      </div>
    </main>
  );
}
