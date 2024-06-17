import clsx from "clsx"

export default function pages(){
    const pagesoptions=[
        'Categories',
        'Live Channels'
    ]
    return(
        <div className="mt-7 flex flex-row">{
            pagesoptions.map((element)=>{
                return(
                    <div key={element} className={clsx("h-10 mr-4 flex items-center",
                        {underline: element ==="Categories"})}>
                        <label className="font-Inter font-semibold text-lg hover:text-[#7637D3] cursor-pointer">{element}</label>
                    </div>
                )
            })
        }
        </div>
    )
}