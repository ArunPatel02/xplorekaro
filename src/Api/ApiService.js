import AxiosInstance from "./AxiosInstance"

const ServerApi = {
    login : function(data){
        return AxiosInstance.post("/login" , data)
    },
    signup : function(data){
        return AxiosInstance.post("/signup" , data)
    },
    resendOtp : function(){
        return AxiosInstance.get("/resend/otp")
    },
    verifyOtp : function(data){
        return AxiosInstance.post("/verify/otp", data)
    },
    validUser : function(){
        return AxiosInstance.get("/validUser")
    },
}

export default ServerApi