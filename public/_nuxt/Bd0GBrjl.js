const o="https://www.nyknow.com",c=(e,r,n,s)=>{try{return fetch(`${o}/api/auth/signup`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:r,confirmPassword:n,captcha:s})})}catch(t){console.log("Error signing up:",t)}},a=(e,r)=>{try{return fetch(`${o}/api/auth/login`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:r})})}catch(n){console.log("Error fetching login",n)}},i=()=>{try{return fetch(`${o}/api/auth/logout`,{credentials:"include",method:"POST"})}catch(e){console.log("Error logging out:",e)}},l=()=>{try{return fetch(`${o}/api/auth/captcha`,{credentials:"include"})}catch(e){console.log("Error fetching captcha:",e)}},p=()=>{try{return fetch(`${o}/api/permission/check`,{credentials:"include"})}catch(e){console.log("Error checking admin:",e)}};export{a,p as c,l as g,i as l,c as s};