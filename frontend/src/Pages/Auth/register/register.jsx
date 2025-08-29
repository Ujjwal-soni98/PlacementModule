import react from "react";
import sideImage from "../../../assets/1.png"

function RegisterForm(){
    return(
    <div className="h-screen w-screen flex items-center justify-center bg-black">
        <div className="form-image-container bg-black hover:shadow-slate-100 border-sky-900 border-8 h w-3/4">
            <div className="w-[50%] border-r-2 p-4">
                    <img src={sideImage} className="my-2" />
            </div>
            <div className="">
                inp
            </div>
        </div>
    </div>
    )
}

export default RegisterForm;