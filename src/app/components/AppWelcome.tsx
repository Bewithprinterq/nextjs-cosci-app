'use client'
// ถ้ามีการโต้ตอบกับ client ต้องใส่ 'use client' เปลี่ยนจาก server component -> client component

type AppWelcomeProps = {
    headTitle?: string;
    isShow: boolean;
}
// สร้างชนิดข้อมูล

export default function AppWelcome({headTitle, isShow}: AppWelcomeProps){
    // เพิ่ม Property headTitle
    const title = 'Welcome to COSCI';
    const currentYear = <p>2025</p>;

    // สร้าง function
    const handleClick = () => {
        alert('Hello TypeScript');
    }

    return (
        <>
            <h1>{headTitle}</h1>
            <p>{title.toUpperCase()}</p>
            {currentYear}
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