import clsx from "clsx" 
export default function Game(props){
    return(
        <article className="w-full">
            <div className="flex flex-col m-2 relative overflow-hidden">
                <img src={props.picture} alt=""
                 className={clsx("object-cover relative hover:border-l-8 hover:border-b-8 hover:border-[#7637D3] cursor-pointer",{
                    "hover:border-[#a726ce] hover:border-l-8 hover:border-b-8":props.type === 'new'
                })} />
                {props.type === 'new' && (
                    <span className="absolute top-2 right-2 bg-[#5e1ebe] text-white px-2 py-1 rounded-md text-xs font-semibold">
                        New
                    </span>
                )}
                
                <div className="">
                    <p className="font-semibold">{props.name}</p>
                    <p className="text-sm text-[#8f8f96]">{props.views}</p>
                </div>
                
            </div>
        </article>
    )
}