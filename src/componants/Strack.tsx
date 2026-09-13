
import { LuX } from "react-icons/lu"
import type { TechnologyType } from "../type/type"
import type { Dispatch } from "react"
import { toast } from "react-toastify"

interface TechnologyCardProps {
    stackTechnology: TechnologyType,
    stackData: TechnologyType[],
    setStackData: Dispatch<React.SetStateAction<TechnologyType[]>>
}
const Strack = ({ stackTechnology, stackData, setStackData }: TechnologyCardProps) => {

    const handleRemoveStack = () => {
        const remainingStack = stackData.filter(t => t.id !== stackTechnology.id);
        toast.warn(`${stackTechnology.name} is removed from your stack.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        setStackData(remainingStack);
    }

    return (
        <div>
            <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 my-4">
                <div className="flex justify-center items-center">
                    <img className="h-8 w-8" src={stackTechnology.icon} alt="" />
                    <div className="flex flex-col ml-2">
                        <span className="font-bold text-[14px] text-[#0F172A]">{stackTechnology.name}</span>
                        <span className="font-bold text-[9px] text-[#94A3B8]">{stackTechnology.category}</span>
                    </div>
                </div>
                <span onClick={() => handleRemoveStack()} className=" text-[#94A3B8] text-xl h-4 w-4 mr-2 hover:text-[#D82C20] cursor-pointer" ><LuX /></span>
            </div>
        </div>
    )
}

export default Strack