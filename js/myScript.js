
 class User{
  constructor(id,login,password,name,email,CountryID,CityID){
    this.UserId=id; 
    this.Login=login;
     this.Password=password;
     this.Name=name;
     this.Email=email;
     this.CountryID=CountryID;
     this.CityID=CityID;
  }
}
var allUsers=SecurityManager.GetAllUsers();
let u=new User((allUsers.length+1),"Malik","12345","Malik Haseeb","malik@gmail.com",1,1);
allUsers.push(u);
$("document").ready(() => {
  
  

  
  
  

  //to show select coutries in user manegement Page
  



  let newRowStr="";
  //intialze user management Table
  for(let u in allUsers)
  {
    newRowStr=`<tr><td>${allUsers[u].UserId}</td><td>${allUsers[u].Name}</td><td>${allUsers[u].Email}</td><td>Edit</td><td>Delete</td></tr>`;
    $("#usersTabble").append(newRowStr);
  }

  
  // userManangement Form submission done here\
    $('#newUser').submit(()=>{
    // console.log(cities);
      let login=$('#login').val();
      let password=$('#passwod').val();
      let name=$('#name').val();
      let email=$('#email').val();
      let country=$('#countr').val();
      let city=$('#city').val();
      u=new User(allUsers.length+1,login,password,name,email,country,city);
      allUsers.push(u);
      alert(allUsers.length);
    }
  );
  // var handleUserLoginInput=(login)=>{
  //     continue;
  // }





});


// const countries = SecurityManager.GetAllCountries();
// console.log(countries);
