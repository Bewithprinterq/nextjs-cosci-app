'use client'
// ถ้ามีการโต้ตอบกับ client ต้องใส่ 'use client' เปลี่ยนจาก server component -> client component

export default function AppWelcome(){
    const title = 'Welcome to COSCI';
    const currentYear = <p>2025</p>;
    const isShow = true;

    // สร้าง function
    const handleClick = () => {
        alert('Hello TypeScript');
    }

    return (
        <>
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