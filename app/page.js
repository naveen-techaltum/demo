'use client';
import { useRouter } from "next/navigation";
const Page=()=>{
    const router=useRouter();
    return(
        <>
            <h2>Home</h2>
            <p>
                Content for Home goes here.   Content for Home goes here.   Content for Home goes here.   Content for Home goes here.   Content for Home goes here.   Content for Home goes here.   Content for Home goes here.   Content for Home goes here.   Content for Home goes here.  
            </p>
            <p>
                <input type="button" value="Show all users" onClick={()=>router.push("/users")} />
            </p>
        </>
    );
}
export default Page;