'use client'
import { Button } from "@/components/ui/button";
// ถ้ามีการโต้ตอบกับ client ต้องใส่ 'use client' เปลี่ยนจาก server component -> client component

import { useState } from "react"; // update state

type AppWelcomeProps = {
    headTitle?: string;
    isShow: boolean;
}
// สร้างชนิดข้อมูล

export default function AppWelcome({headTitle, isShow}: AppWelcomeProps){
    // เพิ่ม Property headTitle
    const [title, setTitle] = useState('Welcome to COSCI') // update state
    // const title = 'Welcome to COSCI';
    const currentYear = <p>2025</p>;

    // สร้าง function
    const handleClick = () => {
        setTitle('Welcome to SWU')
        alert('Hello TypeScript');
    }

    return (
        <>
            <h1>{headTitle}</h1>
            <p>{process.env.NEXT_PUBLIC_APP_NAME}</p>
            <p>{title.toUpperCase()}</p>
            {currentYear}
            <Button className="p-3 m-3" onClick={handleClick}>Click Me</Button>
            <button className="bg-blue-300 p-3 m-3 text-blue-950 rounded-lg" onClick={handleClick}>กดได้เลย!</button> 
            {
                isShow && <p>Date: 10/10/1998</p> 
                // (If True) ถ้า isShow เป็น True จะแสดง Date 10/10/1998
            }
            {
                isShow ? <p>Hello Next.js</p> : <p>Hello JavaScript</p>
                // (If/Else) ถ้า isShow เป็น True แสดง Hello Next.js เป็น False แสดง Hello JavaScript
            }
        </>
    );
}