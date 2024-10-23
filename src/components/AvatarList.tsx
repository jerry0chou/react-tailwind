import React, {useRef} from 'react';

interface AvatarListProps {
    url: string;
    name: string;
}
function Avatar(a: AvatarListProps) {
    return (
        <div className="flex flex-col">
            <img
                className="sm:size-20 md:size-32 lg:size-40 bg-amber-300
                rounded-full border-amber-500 border-2 hover:border-[4px] shadow-md
                hover:shadow-lg shadow-amber-500"
                src={a.url}
                alt="avatar"/>
            <div className="sm:text-sm md:text-base lg:text-lg text-center font-bold  mt-2 italic">{a.name}</div>
        </div>
    )
}

interface  SwitchProps{
    onClick: (kind: 'Slack' | 'Tight')=>void;
}
function Switch(p: SwitchProps){
    const count = useRef(0)
    const onClick = () => {
        count.current++;
        p.onClick(count.current %2 == 0? 'Slack' : 'Tight')
    }

    return (
        <div className="flex gap-2 items-center justify-center h-10 ">
            <span className="text-base font-bold">Slack</span>
            <div className="relative inline-block  w-12 h-6" >
                <input type="checkbox" id="toggle" className="peer hidden"/>
                <label
                    onClick={onClick}
                    htmlFor="toggle"
                    className="block w-full h-full bg-gray-300 rounded-full cursor-pointer peer-checked:bg-amber-500 transition-colors duration-300"
                ></label>
                <span
                    className="absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"
                ></span>
            </div>
            <span className="text-base font-bold">Tight</span>
        </div>
    )
}

export default function AvatarList() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Switch onClick={(s)=> console.log(s)}/>
            <div className="flex  justify-center lg:w-3/5 p-5 gap-10 flex-wrap shadow bg-gray-200 border-2 rounded-3xl">
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah" name="Sarah"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Eliza" name="Eliza"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Brook" name="Brook"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Ryker" name="Ryker"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Luis" name="Luis"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Eden" name="Eden"/>
            </div>
        </div>
    )
}