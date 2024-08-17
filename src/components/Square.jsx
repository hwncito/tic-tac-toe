export default function Square({ style, values, modifyValues }) {
  return (
    <button
      onClick={modifyValues}
      className={`relative w-16 h-16 border-white flex items-center justify-center font-light text-3xl ${style}`}
    >{values}</button>
  );
}
