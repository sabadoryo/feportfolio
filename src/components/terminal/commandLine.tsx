"use client";

import { FormEvent, KeyboardEvent, useState, DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function TerminalCommandLine({ path, content, name, focus, disabled }: any) {
    const [command, setCommand] = useState("");
    const AVAILABLE_COMMANDS = [
        {
            command: "getskills",
            description: "Get skills tree"
        },
        {
            command: "getedu",
            description: "Get education information"
        }
    ]

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(event.target.value)
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            if (event.key === "Enter") {
                console.log(command)
            }
        }
    };

    return (
        <div>
            <div className="pb-2 flex justify-start gap-1">
                <span className="text-white">{path}&gt;</span>
                <input 
                value={command} 
                onKeyDown={handleKeyDown} 
                onChange={onChangeHandler} 
                className="bg-black border-none w-[100%] flex-grow text-white outline-none" 
                name={name} type="text" 
                autoFocus={focus} 
                disabled={disabled}
                autoComplete="off" />
            </div>
            <div className="text-white">
                {content}
            </div>
        </div>
        
    )
}