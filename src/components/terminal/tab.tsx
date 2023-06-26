export default function Tab({ name }: { name: string }) {
    return (
        <div className="ml-1 w-[127px] h-[35px] bg-slate-300 rounded-t-[17px] flex justify-between cursor-default hover:bg-slate-600">
            <div className="w-[110px] h-[17px] ml-1 mt-2">{name}</div>
            <button className=" text-slate-400 hover:text-slate-700 mr-2"> &#x2715; </button>
        </div>
    )
}