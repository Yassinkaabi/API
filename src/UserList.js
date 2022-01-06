import {useEffect,useState} from 'react' ;
import axios from 'axios';


const UserList =()=> {
const [listOfUSer, setlistOfUSer] = useState([])

useEffect(() => {
    axios.
    get("https://jsonplaceholder.typicode.com/users")
    .then ((response) =>{
    console.log(response)
    setlistOfUSer(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })

}, [])
return (

<div class="container rounded bg-white mt-5 mb-5">
<div class="row">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h1 class="text-right" >Profile Settings</h1>
                </div>
                <div class="row mt-3">
    <div class="list">
    {listOfUSer.map((user)=> (
                <div className='list_user' key={user.id} {...user} >
                    <div class="col-md-12"><label class="labels">id: {user.id}</label></div>
                    <div class="col-md-12"><label class="labels">name: {user.name}</label></div>
                    <div class="col-md-12"><label class="labels">username: {user.username}</label></div>
                    <div class="col-md-12"><label class="labels">email: {user.email}</label></div>
                    <div class="col-md-12"><label class="labels">phone: {user.phone}</label></div>
                    <div class="col-md-12"><label class="labels">website: {user.website}</label></div>
                </div>
                                    )
                                    )
                                    }
</div>
</div>
</div>
</div>

        

            
            
            
            
            
            
        

  )
}
export default UserList;