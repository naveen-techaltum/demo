import axios from "axios"
async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}
const Page=async()=>{
    const users=await getUsers();
    console.log(users);
    return(
        <>
            <h2>Showing all users</h2>
            {
                users.map(user=>{return(
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>
                            {user.website} <br />
                            {user.email} <br />
                            {user.phone}
                        </p>
                        <hr />
                    </div>
                )})
            }
        </>
    );
}
export default Page;