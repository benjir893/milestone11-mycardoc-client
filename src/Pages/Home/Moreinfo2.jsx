import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const Moreinfo2 = () => {
    return (
        <div>
             <div className="md:flex w-full pt-6 pb-6 mt-6 mb-6">
                <div className="relative">
                    <img className=' w-2/3 mx-auto rounded-xl' src={person} alt="" />
                    <img className='absolute w-1/2 -mt-48 ml-72 rounded-xl border-4 border-solid border-orange-300 border-spacing-4' src={parts} alt="" />

                </div>
                <div className="">
                    <h1 className='text-orange-600 font-bold font-Gupta mb-3'>About Us</h1>
                    <h1 className='text-2xl font-Gupta font-bold'>We are Qualified <br />and of Experience <br />in this Field</h1>
                    <p className='pt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='pt-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='btn bg-orange-400 text-white font-roboto mt-10'>Get more info..</button>
                </div>
            </div>
        </div>
    );
};

export default Moreinfo2;