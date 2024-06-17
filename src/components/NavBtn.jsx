import clsx from "clsx"
export default function NavBar(){
    const buttons=[
        "Log In",
        "Sing Up"
    ]
    return(
        <div className="hidden sm:block" >{
            buttons.map((btn)=>{
                return(
                    <button key={`btn-${btn}`} className={clsx("text-white font-Roobert text-sm bg-[#7637D3] rounded-[5px] ml-4 py-1 px-2 hover:bg-[#6630b8]",
                    {special: btn === "Log In"})}> {btn}</button>
                )
            })
        }
        </div>
    )
} 