import BannerImage from '../assets/banner-stack.png'
const HeroSection = () => {
    return (
        <div>
            <section className='max-w-7xl mx-auto flex flex-col justify-center md:flex-row  md:justify-between items-center mt-8 p-4 md:p-0 '>
                <div className='md:w-1/2'>
                    <div>
                        <h2 className='md:text-[60px] text-[40px] font-extrabold '>Build Your Ideal <br /> <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'> Development Stack</span></h2>
                        <p className='my-5 text-[#475569] md:text-lg '>Explore frontend, backend, database, and tooling options,<br /> compare them side by side, and put together the stack that fits your <br />next project.</p>
                    </div>
                    <div className='flex justify-center md:justify-start gap-5 mt-10'>
                        <button className='btn  bg-linear-to-r py-5 from-[#F97316] to-[#EC4899] text-white rounded-lg'>Explore Technologies</button>
                        <button className='btn w-43 font-light rounded-lg'>Learn More</button>
                    </div>
                </div>
                <div>
                    <img src={BannerImage} alt="" />
                </div>
            </section>
        </div>
    )
}

export default HeroSection