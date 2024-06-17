import NavBtn from "./NavBtn"

export default function NavBar(){
    return(
        <header className="flex flex-row justify-end h-12 bg-[#ffffff] border-b border-gray-300 shadow-sm">
            <div className="min-w-[100px] flex flex-row self-start items-center sm:min-w-[150px] justify-around h-full">
                <img src="https://img.icons8.com/?size=100&id=7qFfaszJSlTs&format=png&color=000000" 
                className="ml-1 min-w-[30px] w-[30px] h-[30px] transform transition-transform duration-300 hover:scale-125 cursor-pointer" alt="" />
                <div className="min-w-[40px] sm:min-w-[70px] h-full border-b-[3px] border-[#7637D3] flex items-center cursor-pointer">
                    <p className="ml-2 hidden sm:block font-Arial font-semibold text-[#7637D3] text-md " >Browse</p>
                    <img src="https://img.icons8.com/?size=100&id=15047&format=png&color=7637D3" 
                    className= "ml-1 w-[30px] h-[30px] sm:hidden" alt="" />
                </div>
            </div>
            <div className="flex justify-end w-full md:w-[70%] md:justify-center h-full p-2">
                <input type="text" placeholder="Search" className="p-2 hidden md:block md:w-[350px] border-[1px] border-[#adadb8] bg-transparent rounded-l-md focus:outline-none focus:border-[#7637D3] focus:border-[3px] hover:border-[2px]"/>
                <div className="h-full w-[30px] bg-transparent md:bg-[#e6e6ea] flex justify-center items-center rounded-r-md ">
                    <img src="https://img.icons8.com/?size=100&id=KuxJGU4fjVAO&format=png&color=000000" 
                    className="w-[20px] h-[20px]"
                    alt="" />
                </div>
            </div>
            <div className="flex min-w-[70px] sm:min-w-[250px] h-full flex-row items-center justify-end">
                <div className="hidden sm:block flex items-center justify-center w-[30px] h-[30px] rounded-[5px] hover:bg-[#d0d0d3]">
                    <img src="https://img.icons8.com/?size=100&id=lr08xOQLpB8q&format=png&color=000000" 
                    className="w-[20px] h-[20px] cursor-pointer  " alt="" />
                </div>
                <NavBtn/>
                <div className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center ml-4 mr-4 hover:bg-[#d0d0d3]" >
                    <img src="https://img.icons8.com/?size=100&id=4618wcb9DoYl&format=png&color=000000"
                    className="w-[25px] h-[25px] cursor-pointer" alt="" />
                </div>

            </div>
        </header>
    )
}