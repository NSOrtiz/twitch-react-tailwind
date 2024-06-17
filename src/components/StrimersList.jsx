import clsx from "clsx";

export default function strimers(){
    const strimersList=[
        {imge: 'https://content.wepik.com/statics/272059726/preview-page0.jpg', nickName: 'ElSpreen', game:'Rust', followers:'🔴 22.8K',  line: 'live' },
        {imge: 'https://content.wepik.com/statics/21869707/preview-page0.jpg', nickName: 'RenRize', game:'Rust', followers:'🔴 2.8k',  line: 'offline' },
        {imge: 'https://content.wepik.com/statics/20733816/preview-page0.jpg', nickName: 'MixWell', game:'Elden Ring', followers:'🔴 26.3k',  line: 'offline' },
        {imge: 'https://content.wepik.com/statics/63121001/preview-page0.jpg', nickName: 'IJenz', game:'League of Legends', followers:'🔴 1.4k',  line: 'live' },
        {imge: 'https://content.wepik.com/statics/21880676/preview-page0.jpg', nickName: 'VickVick', game:'League of Legends', followers:'🔴 20k',  line: 'offline' },
        {imge: 'https://content.wepik.com/statics/63153891/preview-page0.jpg', nickName: 'Aldo98', game:'Just Chatting', followers:'🔴 4.9k',  line: 'live' },
        {imge: 'https://content.wepik.com/statics/179364953/preview-page0.jpg', nickName: 'MizKnife', game:'Special Events', followers:'🔴 1.5k',  line: 'live' },
        {imge: 'https://content.wepik.com/statics/21844573/preview-page0.jpg', nickName: 'JJMine', game:'Minecraft', followers:'🔴 3.1k',  line: 'live' },
        {imge: 'https://content.wepik.com/statics/224815697/preview-page0.jpg', nickName: 'RoseXD', game:'Fortnite', followers:'🔴 11.6k',  line: 'offline' },
        {imge: 'https://content.wepik.com/statics/227706369/preview-page0.jpg', nickName: 'CandyKane', game:'Art', followers:'🔴 1.5k',  line: 'live' }
    ];
    return(
        <aside className=" hidden sm:block h-[100hv] w-[50px] md:w-[270px] bg-[#e6e6ea] flex flex-col ">
            <div className="w-full h-[40px]  flex justify-around items-center ">
                <p className="hidden md:block font-Inter font-semibold text-[13px]">RECOMMENDED CHANNELS</p>
                <div className="hidden md:block cursor-pointer md:flex justify-center items-center w-[30px] h-[30px] rounded-[5px]  hover:bg-[#d0d0d3]  ">
                    <img src="https://img.icons8.com/?size=100&id=7811&format=png&color=1A1A1A" 
                    className=" w-[20px] h-[20px]" alt="" />
                </div>
                <img src="https://img.icons8.com/?size=100&id=KrlQ0NKu91Yk&format=png&color=4D4D4D" 
                className="w-[20px] h-[20px] md:hidden" alt="" />
            </div>
            {strimersList.map((item)=>{
                return(
                    <div key={item.text} className="bg-[#e6e6ea] w-full h-[50px] flex flex-row items-center gap-3 md:hover:bg-[#d0d0d3] cursor-pointer">
                        <img src={item.imge} className={clsx("w-[30px] h-[30px] rounded-[50%] ml-2",
                            {imgWB: item.line === "offline"})} alt="" />
                        <span className="hidden md:block flex w-[140px]  flex-col ">
                            <p className="font-Inter font-semibold text-sm">{item.nickName}</p>
                            <p className="font-Inter text-[13px] text-[#5f5f5f]">{item.game}</p>
                        </span>
                        <div className=" hidden md:block w-[70px] md:flex flex-col justify-end items-center">
                            <p className="font-Arial text-xs">{item.followers}</p>
                            <p className="font-Inter text-[13px] text-[#5f5f5f]">{item.line}</p>
                        </div>
                    </div>
                )
            })}
        </aside>
    )
}