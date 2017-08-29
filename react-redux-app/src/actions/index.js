export const SelectedUser = (user) =>{
    console.log("You clicked on  : "+user.first);

    return{
        type:"USER_SELECTED",
        payload:user
    }
}