import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div className=' md:mt-25 py-6 md:pt-15 border-t border-gray-200'>
            <div className='max-w-7xl mx-auto p-4 md:p-0 text-[12px] '>
                <div className='max-w-7xl mx-auto grid md:grid-cols-5 gap-5 py-4 md:py-0 text-[12px] pb-2 md:pb-8 border-b border-gray-200'>
                    <div className='md:col-span-2 md:w-full flex flex-col justify-center md:justify-start md:items-start items-center'>
                        <img src={Logo} alt="Devstack" />
                        <p className='text-center md:text-left my-4 text-[#64748B]'>Curated tools, technologies, and resources for developers building <br /> modern software.</p>
                        <div className='flex my-6 gap-6 font-bold text-[#475569]'>
                            <span>GitHub</span>
                            <span> Twitter
                            </span><span>LinkedIn</span>
                        </div>
                    </div>
                    <div className='hidden col-span-3 md:flex justify-between list-none text-[#64748B]'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-[#0F172A] mb-2' >PRODUCT</h2>
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-[#0F172A] mb-2'>COMPANY</h2>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-[#0F172A] mb-2'>LEGAL</h2>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>

                        </div>

                    </div>
                </div>
                <div className='flex justify-between  mt-6 text-[#64748B]'>
                    <p>©2026 Devstack. All rights reserved.</p>
                    <p><span>Privacy</span><span>Terms</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
