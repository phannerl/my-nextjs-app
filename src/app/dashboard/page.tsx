"use client"
import stypes from "@/ui/dashboard.module.css";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface User {
    id: number;
    username: string;
    email: string;
    phone: string;
    address: string;
}
export default function DashboardPage() {
    const [click, setClick] = useState(false);
    const [fetchedData, setFetchedData] = useState<User[]>([]);
    const handleClicked = () => {
        console.log("Clicked", fetchedData);
        setClick(!click);
    }
    useEffect(() => {
        fetch_data().then((data) => {
            console.log(data);
            setFetchedData(data.users);
        });
    }, []);

    return (
        <div className="flex h-screen justify-center items-center flex-col">
            <h1
                className={clsx({
                    "bg-gradient-to-r from-violet-500 to-fuchsia-500":
                        click === true,
                })}>
                Hello, Dashboard Page!
            </h1>
            <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
            <br />
            <div className={stypes.box}>
                Box
                <div>
                    {fetchedData?.map((data, index) => (
                        <div key={index}>{data.username}</div>
                    ))}
                </div>
            </div>
            <div>
                <button onClick={handleClicked}>
                    {click ? "Clicked" : "Click"}
                </button>
            </div>
        </div>
    );
    
}

const fetch_data = async () => {
    const res = await fetch("http://127.0.0.1:8000/users/all");
    const data = await res.json();
    return data;
}
