export default function Teclado(){
    return(
        <div className="h-full grid grid-cols-3 gap-4 text-white">
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 ">1</button>
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 ">2</button>
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 ">3</button>
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 ">4</button>
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 ">5</button>
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 ">6</button>
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 ">7</button>
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 ">8</button>
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 ">9</button>
            <button className="border border-yellow-300 rounded-lg text-yellow-300 focus:ring-2">Limpar</button>
            <button className="bg-zinc-950 rounded-lg border-transparent focus:ring-2 focus:ring-orange-500 focus:bg-transparent">0</button>
            <button className="border border-green-400 rounded-lg text-green-400 focus:ring-2">Ok</button>
          </div>
    )
}