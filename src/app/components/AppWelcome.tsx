export default function AppWelcome(){
    const title = 'Welcome to COSCI';
    const currentYear = <p>2025</p>;
    const isShow = true;

    return (
        <>
            <p>{title.toUpperCase()}</p>
            {currentYear}
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