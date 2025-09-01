type TecladoProps = {
  onInput: (value: string) => void;
  onClear: () => void;
  onBackspace: () => void;
};

export default function Teclado({
  onInput,
  onClear,
  onBackspace,
}: TecladoProps) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "⌫"];
  const onChange = (item: string) => {
    if (item == "C") {
      onClear();
    } else if (item == "⌫") {
      onBackspace();
    } else {
      onInput(item);
    }
  };
  return (
    <div className="h-full grid grid-cols-3 gap-4 text-white">
      {keys.map((item) => {
        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={ item=="C"?'text-yellow-300 bg-zinc-950 border rounded-lg border-yellow-300 active:ring-2' : item == "⌫"?'text-green-300 bg-zinc-950 border border-green-400 rounded-lg active:ring-2 active:ring-green-400': 'bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 '}
          >
            {item}
          </button>
        );
      })}
      {/* <button onClick={() => onInput("1")} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        1
      </button>
      <button onClick={() => onInput("2")} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        2
      </button>
      <button onClick={() => onInput} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        3
      </button>
      <button onClick={() => onInput} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        4
      </button>
      <button onClick={() => onInput} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        5
      </button>
      <button onClick={() => onInput} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        6
      </button>
      <button onClick={() => onInput} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        7
      </button>
      <button onClick={() => onInput} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        8
      </button>
      <button onClick={() => onInput} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        9
      </button>
      <button onClick={onClear} className="border border-yellow-300 rounded-lg text-yellow-300 active:ring-2">
        Limpar
      </button>
      <button onClick={() => onInput} className="bg-zinc-950 rounded-lg border-transparent active:ring-2 active:ring-orange-500 ">
        0
      </button>
      <button onClick={onBackspace} className="border border-green-400 rounded-lg active:ring-2  active:ring-green-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 stroke-green-400 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
          />
        </svg>
      </button> */}
    </div>
  );
}
