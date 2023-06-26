import TerminalCommandLine from "@/components/terminal/commandLine";
import Tab from "@/components/terminal/tab";

export default function Dashboard() {
    

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="w-[920px] h-[575px] bg-black shadow-2xl border-double border-4 rounded-3xl overflow-auto">
                <div className="flex gap-1 mt-[19px]">
                    <Tab name="Window 1"></Tab>

                    <button className="text-slate-400 ml-2 hover:text-slate-700">+</button>
                </div>
                <div className="w-full h-[2px] bg-slate-600"></div>
                <div className="ml-1 mt-1 flex flex-col">
                    <span className="text-white">BudgetShell</span>
                    <span className="text-white">All rights reserved.</span>
                    {/* cmdline */}
                    <div className="mt-[50px] flex-row">
                        <TerminalCommandLine 
                            path="Yernar:\"
                            content="some contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome content"
                            name="1"
                            disabled={true}
                            focus={false}>
                        </TerminalCommandLine>
                        <TerminalCommandLine 
                            path="Yernar:\"
                            content=""
                            name="2"
                            disabled={false}
                            focus={true}>
                        </TerminalCommandLine>
                    </div>
                </div>
            </div>
        </main>
    )
}