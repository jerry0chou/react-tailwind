import React, {useRef, useState} from 'react';

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
interface SmallAvatarProps {
    url: string;
}
function SmallAvatar(p: SmallAvatarProps) {
    return (
        <div className="flex flex-row flex-shrink-0 -ml-3">
            <img
                className="size-16 bg-amber-300
                rounded-full border-amber-500 border-2 hover:border-[4px] shadow-md
                hover:shadow-lg shadow-amber-500"
                src={p.url}
                alt="avatar"/>
        </div>
    )
}

interface SwitchProps {
    onClick: (kind: 'Slack' | 'Tight') => void;
}

function Switch(p: SwitchProps) {
    const count = useRef(0)
    const onClick = () => {
        count.current++;
        p.onClick(count.current % 2 == 0 ? 'Slack' : 'Tight')
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
    const [isSlack, setIsSlack] = useState(true);
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Switch onClick={(s)=> { if(s == 'Slack') setIsSlack(true); else setIsSlack(false); }}/>
            {isSlack && <div className="flex  justify-center lg:w-3/5 p-5 gap-10 flex-wrap shadow bg-gray-200 border-2 rounded-3xl">
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah" name="Sarah"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Eliza" name="Eliza"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Brook" name="Brook"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Ryker" name="Ryker"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Luis" name="Luis"/>
                <Avatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Eden" name="Eden"/>
            </div>}
            {!isSlack &&
                <div className="flex justify-center w-fit pl-4 p-1 flex-nowrap shadow bg-gray-200 border-2 rounded-3xl">
                    <SmallAvatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah" />
                    <SmallAvatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Eliza" />
                    <SmallAvatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Brook" />
                    <SmallAvatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Ryker" />
                    <SmallAvatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Luis" />
                    <SmallAvatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Eden" />
                    <SmallAvatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander" />
                    <SmallAvatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Leo" />
                    <SmallAvatar url="https://api.dicebear.com/9.x/adventurer/svg?seed=Wyatt" />
                </div>
            }

        </div>
    )
}