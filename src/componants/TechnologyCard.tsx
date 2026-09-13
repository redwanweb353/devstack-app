
import { FaStar } from 'react-icons/fa';
import type { TechnologyType } from '../type/type'
import { getTechnologyStyle } from './BadgeColor';
import { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';


interface TechnologyCardProps {
    technology: TechnologyType,
    handleAddToStack: (technology: TechnologyType) => void,
    handleWarning: (technology: TechnologyType) => void,


}

const TechnologyCard = ({ technology, handleAddToStack, handleWarning }: TechnologyCardProps) => {

    const [isDisabled, setIsDisabled] = useState<boolean>(false);



    const handleAddToStackClick = () => {
        handleAddToStack(technology);
        setIsDisabled(true);

    }

    const handleWarn = () => {
        handleWarning(technology)
    }


    const getBadgeColor = (id: string) => {
        return getTechnologyStyle(id);
    }

    return (
        <div className={`border  rounded-xl p-5 flex flex-col ${isDisabled ? 'border-[#DB2777] ' : ' border-gray-200 b'}`}>
            <div className='border-gray-400'>
                <div className='flex justify-between'>
                    <img className='h-8 w-8 ' src={technology.icon} alt={technology.name} />
                    <button className={` ${getBadgeColor(technology.id)}  text-[12px] px-6 py-2 rounded-full font-bold`}>
                        {technology.badge}
                    </button>
                </div>
                <h2 className='text-[#0F172A] font-bold text-xl my-2'>{technology.name}</h2>
                <p className='text-[12px]  text-[#64748B]'>{technology.description}</p>
            </div>
            <div className='flex justify-between items-center my-4 border-t border-gray-200 pt-4'>
                <button className='bg-[#F1F5F9] font-medium text-[#475569] text-[12px] px-5 py-2 rounded-lg'>{technology.category}</button>
                <p className='text-[#64748B] text-[12px]'>{technology.difficulty}</p>
                <span className='text-[#334155] flex gap-2  text-[12px]'> <FaStar className='text-[#FBBF24] mt-0.5 ' />{technology.rating}</span>
            </div>

            <div onClick={handleWarn} className=' mt-auto  cursor-not-allowed'>
                <button disabled={isDisabled} className={`btn w-full bg-[#0A0F1D]  rounded-lg ${isDisabled ? 'bg-[#ffeaf4e0] text-[#DB2777]  ' : 'text-white '}`} onClick={handleAddToStackClick}>{isDisabled ? <GiCheckMark /> : ""}{isDisabled ? 'Added to Stack' : 'Add to Stack'} </button>

            </div>
        </div>
    )
}

export default TechnologyCard