import React from 'react';

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

export default function AvatarList() {
    return (
        <div className="flex  justify-center w-full">
            <div className="flex  justify-center w-3/5 p-5 gap-10 flex-wrap shadow bg-gray-200 border-2 rounded-3xl">
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