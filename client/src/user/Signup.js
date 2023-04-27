 import React, {Component} from "react";

 class Signup extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""
        }
    }
    
    //tailwindintellisense
    
    render(){
        return(
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-[400px] border shadow border-[#AEE3CE] rounded-[15px] ">
                <h2 className="text-[15px] text-center my-4 py-2 "> <div className="-mb-6 ml-6"><ChevronIcon /></div>Signup</h2>
                <hr class="h-px bg-gray-300 border-0 dark:bg-gray-700" />
                <form className="w-full max-w-3xl mx-auto bg-white rounded px-8 pt-6 pb-8 mb-4 ">
                    <div className="">
                        <input type= "text" placeholder= "Firstname" className="border appearance-none rounded-tr rounded-tl bg-transparent border-grey-500 w-full mr-3  py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mb-6">
                        <input type= "text" placeholder= "Lastname" className=" border-r border-l border-b appearance-none rounded-br rounded-bl bg-transparent border-grey-500 w-full mr-3  py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <p className="block text-sm text-grey-2 -mt-4 pt-0 pb-3 font-light text-xs ">Make sure it matches the name on your government ID</p>
                    <div className="mb-4 ">
                        <input type= "text" placeholder= "Gender" className=" border appearance-none rounded bg-transparent border-grey-500 w-full mr-3 mt-4 py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mb-10 ">
                        <input type= "date" placeholder= "Date of Birth" className="border appearance-none rounded bg-transparent border-grey-500 w-full mt-0 mr-3 py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <p className="block text-sm text-grey-2 -mt-8  font-light pb-3 text-xs">To signup , you have to be at least 18 years. Your information will be kept private.</p>
                    <div className="mb-4">
                        <input type= "email" placeholder= "Email" className=" border appearance-none rounded bg-transparent border-grey-500 w-full mr-3 mt-4 py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <p className="block text-sm text-grey-2 font-light -mt-3 pb-3 text-xs">We will email you inspection requests and confirmations.</p>
                    <div className="mb-4">
                    <input type= "Password" placeholder= "password" className=" border appearance-none rounded bg-transparent border-grey-500 w-full mr-3 mt-4 py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <button className="w-full bg-[#009d77] hover:bg-[#3EB682] text-white font-bold py-2 px-4 border -b-4  rounded">Continue</button>
                    <p className="block text-sm text-grey-2 py-2 font-light text-[10px]">By clicking Agree and Continue, I hereby agree to the Roomscout's <span className="text-[#009d77]">Terms and Conditions</span> and acknowledge the<span className="text-[#009d77]"> Privacy Policy</span>.</p>
                </form>
                </div>
            </div>
        );
    }
 }

 export default Signup;

 const ChevronIcon = () =>(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#009d77] ">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

)