const s="https://www.nyknow.com",n=()=>{try{return fetch(`${s}/api/user`,{credentials:"include"})}catch(e){console.log("Error fetching user info",e)}},t=(e,o)=>{try{return fetch(`${s}/api/user`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({oldPassword:e,newPassword:o}),credentials:"include"})}catch(r){console.log("Error changing password",r)}};export{t as c,n as g};