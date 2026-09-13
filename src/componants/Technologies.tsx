
import { use, useState } from 'react'
import type { TechnologyType } from '../type/type'
import TechnologyCard from './TechnologyCard'
import Strack from './Strack'
import { toast } from 'react-toastify'
export interface TechnologyPropas {
    technologyPromise: Promise<TechnologyType[]>
}

const Technologies = ({ technologyPromise }: TechnologyPropas) => {



    const [stackData, setStackData] = useState<TechnologyType[]>([])

    const technologiesData = use(technologyPromise)

    const handleRemoveAllStack = () => {
        setStackData([])

        toast.warn(`All technologies are removed from your stack successfully !`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const handleAddToStack = (technology: TechnologyType) => {
        setStackData([...stackData, technology]);

        toast.success(`${technology.name} is add to your stack successfully !`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });


    }
    const handleWarning = (technology: TechnologyType) => {
        if (stackData.find((s) => s.id === technology.id)) {
            toast.error(`${technology.name} is already added to stack!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }


    return (
        <div className='max-w-7xl mx-auto my-5 md:my-10 p-4 md:p-0'>
            <h2 className='font-extrabold text-[36px]'>Explore the <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h2>
            <p className='text-[#64748B] mb-10 mt-2'>Pick one technology per category to build your ideal stack.</p>
            <div className='grid md:grid-cols-4 gap-5 max-w-7xl mx-auto my-5' >

                <div className='md:col-span-3'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            technologiesData.map((technology) => <TechnologyCard key={technology.id} technology={technology} handleAddToStack={handleAddToStack} handleWarning={handleWarning} />)
                        }
                    </div>

                </div>
                <div className='md:col-span-1 w-full '>
                    <div className=' border border-gray-200 p-4 rounded-xl w-full'>
                        <h2 className='font-bold text-xl'>Your Stack</h2>
                        <p className='text-[#94A3B8] text-[14px]'> {stackData.length === 0 ? 'No technologies selected yet.' : `${stackData.length} Technology Selected`}</p>
                        {
                            stackData.map(stackTechnology => <Strack key={stackTechnology.id} stackTechnology={stackTechnology} stackData={stackData} setStackData={setStackData}></Strack>)
                        }
                        {
                            stackData.length === 0
                                ? <div className='border border-dashed border-[#E2E8F0] p-8 my-5 flex items-center justify-center rounded-xl'>
                                    <p className='text-[#94A3B8] text-[14px]'>Your stack is empty.</p>
                                </div>
                                : <button onClick={handleRemoveAllStack} className='btn bg-white font-semibold w-full mt-6 text-[#D82C20] border-[#D82C20] rounded-lg'> Remove All</button>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies