import axios from "axios"

let API_admin=axios.create({
    BaseURL:REACT_APP_BE_ADMIN_URL
})

let API_user=axios.create({
    BaseURL:REACT_APP_BE_USER_URL
})

API_admin.interceptors.request.use((config)=>{
    let token=localStorage.getItem("token")
    config.headers.token=token
})

API_user.interceptors.request.use((config)=>{
    let token=localStorage.getItem("token")
    config.headers.token=token
})

export default {API_admin,API_user}
