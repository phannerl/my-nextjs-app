import { useState } from 'react';

export default function DashboardPage() {
    const [click, setClick] = useState(false);

    return <DashboardView click={click} setClick={setClick}/>;
}

import stypes from '@/ui/dashboard.module.css';
import clsx from 'clsx';

interface DashboardViewProps {
    click: boolean;
    setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function DashboardView({click, setClick}: Readonly<DashboardViewProps>) {

    return (
        <div className="flex h-screen justify-center items-center flex-col">
            <h1 className={clsx({"bg-gradient-to-r from-violet-500 to-fuchsia-500": click === true})}>Hello, Dashboard Page!</h1>
            <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
            <br />
            <div className={stypes.box}>
                Box
            </div>
            <div>
                <button onClick={() => setClick(!click)}>{click?"Clicked":"Click"}</button>
            </div>
        </div>
    );
}
