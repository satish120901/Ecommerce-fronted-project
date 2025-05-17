import { Link } from "react-router-dom";

function SideNav() 
{
  const userJson = localStorage.getItem("user");
  //const {usertype} = JSON.parse(userJson);

  const options={
    
    User:[
      {label:'ViewCart', to:'/dashboard/Viewcart'},
      {label:'Account',to:'/dashboard/Account'},
      {label:'Logout' ,to:'/Logout'},
      {label:'ViewProduct',to:'/dashboard/ViewProduct'},
    ]
  }

  return (
    <div>
  
       <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        {
          
          options["User"].map((btn,index)=> <Link className="btn btn-info m-2 " style={{width:"120px"}}key={index} to={btn.to}>{btn.label}</Link>)
        }
        </div>
    </div>
  )
}

export default SideNav;