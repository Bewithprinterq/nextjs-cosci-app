import Contact01Page from "@/components/contact-01/contact-01";

export default async function About() {
    const data = await fetch('http://api.codingthailand.com/api/version',{next: {revalidate: 3600}});
    // cache 1 ชม. ใส่ revalidate
    const apiInfo = await data.json();
    return (
        <>
        {
            apiInfo && <Contact01Page version={apiInfo.data.version}/>
        }
        </>
    );
}