export default function Dashboard() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="w-[920px] h-[575px] bg-black shadow-2xl border-double border-4 rounded-3xl">
                <div className="flex gap-1 mt-[19px]">
                    <div className="ml-1 w-[127px] h-[35px] bg-slate-300 rounded-t-[17px] flex justify-between cursor-default hover:bg-slate-600">
                        <div className="w-[110px] h-[17px] ml-1 mt-2">Window 1</div>
                        <button className=" text-slate-400 hover:text-slate-700 mr-2"> &#x2715; </button>
                    </div>

                    <button className="text-slate-400 ml-2 hover:text-slate-700">+</button>
                </div>
                <div className="w-full h-[2px] bg-slate-600"></div>
                <div className="ml-1 mt-1 flex flex-col">
                    <span className="text-white">Yuterminal v1</span>
                    <span className="text-white">All rights reserved.</span>
                    
                    {/* cmdline */}
                    <div>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}