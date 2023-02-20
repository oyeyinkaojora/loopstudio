import Interactive from '../assets/images/mobile/image-interactive.jpg';
import InteractiveD from '../assets/images/desktop/image-interactive.jpg';

const Cta = () => {
  return (
    <div className="flex flex-col m-5 md:flex-row md:relative md:mx-[100px] md:my-[150px] md:h-full">
      <img className='md:hidden' src={Interactive} alt="interactive" />
      <img className=' hidden md:block md:relative md:z-10' width="600px"  src={InteractiveD} alt="interactive" />

      <div className="text-center mt-8 flex flex-col md:absolute md:py-[2rem]  md:px-[50px] md:z-20 md:bg-white md:left-[9rem] md:top-[10.5rem] md:text-start md:mt-0 md:w-[35rem] sm:left-[12rem]">
        <h1 className="font-jose text-black text-4xl uppercase  md:px-[41px] md:mt-[2rem]  ">
          The leader in interactive VR
        </h1>
        <p className="font-alata text-darkgray p-4 md:px-[30px] md:py-[3rem]">
          Founded in 2011,Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Cta;
