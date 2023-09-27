import imgRick from '../assets/Rick.jpg'

const Navbar = () => {
    return (
        <div className='w-full h-52 overflow-hidden  relative'>
            <img
                className='w-full h-full object-cover '
                src={imgRick} alt={`banner_${imgRick}`} />

            <h1 className='text-5xl font-bold text-slate-100 absolute bottom-4 left-[50%] -translate-x-[50%] 
    bg-black/60 p-4 rounded-lg '>Rick and Morty Challenge</h1>
        </div>
    )
}

export default Navbar