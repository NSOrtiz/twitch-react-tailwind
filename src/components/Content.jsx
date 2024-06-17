import Categories from "./Categories";
import OptionPages from "./OptionPages";
import Games from "./Games";

export default function Content(){
    return(
        <section className="flex flex-col p-7 w-full">
            <h1 className="font-Roobert text-5xl">Browse</h1>
            <div className="h-[190px] md:h-[130px] lg:h-[70px]">
                <Categories/>
            </div>
            <OptionPages/>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 mb-5">
                <button className="flex flex-row justify-around p-1 w-[200px] text-sm border-[1px] border-[#adadb8] bg-transparent rounded-md hover:border-[#7637D3] hover:border-[3px] focus:outline-none"> 
                    <div className="h-full w-[20px] bg-transparent flex justify-center items-center">
                        <img src="https://img.icons8.com/?size=100&id=KuxJGU4fjVAO&format=png&color=000000" 
                        className="w-[15px] h-[15px]"
                        alt="" />
                    </div>
                    <input type="text" placeholder="Search Category Tags" className=" w-[150px] text-sm bg-transparent focus:outline-none"/>
                </button>
                <div className="flex flex-row justify-end gap-2 items-center">
                    <label className="text-sm font-semibold">Sort by</label>
                    <select name="" className="w-[200px] h-[30px] text-sm text-[#adadb8] border-[1px] border-[#adadb8] bg-transparent rounded-md hover:border-[#7637D3] hover:border-[3px] focus:outline-none">
                        <option value="" disabled selected hidden>Recommended For You</option>
                    </select>
                </div>
            </div>
            <Games/>

        </section>
    )
}