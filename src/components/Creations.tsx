const Creations = () => {
  return (
    <div className="mt-[100px] mx-20 md:mt-[20rem]">
      <div className="hidden md:flex md:justify-between md:mx-auto md:mb-[-100px]">
        <h1 className="font-jose text-center text-black text-4xl uppercase">
          Our creations
        </h1>

        <div className="flex align-center justify-center">
          <button className="text-black font-jose border-2 tracking-[0.4rem] font-bold border-black uppercase py-2 px-4 ">
            See all
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:relative md:justify-center md:my-[150px] md:h-full md:align-center ">
        <div className=" md:grid md:grid-cols-4 md:grid-rows-2 md:gap-8">
          <div className="bg-deep-mobile bg-blue-600/30 backdrop-brightness-75 bg-cover bg-no-repeat bg-center w-[100%] h-[130px] mt-8 md:mt-0 md:bg-deep-desktop md:w-[100%] md:h-[350px]">
            <p className="text-white text-2xl uppercase p-5 font-jose relative top-[30px]">
              {' '}
              Deep <span className="block">Earth</span>
            </p>
          </div>

          <div className="bg-night-mobile bg-black-600/30 backdrop-brightness-05 bg-cover bg-no-repeat bg-center w-[100%] h-[130px] mt-8 md:mt-0 md:bg-night-desktop md:w-[100%] md:h-[350px]">
            <p className="text-white text-2xl uppercase p-5 font-bold font-jose relative top-[30px]">
              {' '}
              Night <span className="block">Arcade</span>
            </p>
          </div>

          <div className="bg-soccer-mobile bg-black-600/30 backdrop-brightness-75 bg-cover bg-no-repeat bg-center w-[100%] h-[130px] mt-8 md:mt-0 md:bg-soccer-desktop md:w-[100%] md:h-[350px]">
            <p className="text-white text-2xl uppercase p-5 font-jose relative top-[30px]">
              {' '}
              Soccer <span className="block">Team Vr</span>
            </p>
          </div>

          <div className="bg-grid-mobile bg-cover bg-no-repeat bg-center w-[100%] h-[130px] mt-8 md:mt-0 md:bg-grid-desktop md:w-[100%] md:h-[350px]">
            <p className="text-white text-2xl uppercase p-5 font-jose relative top-[30px]">
              {' '}
              The <span className="block">Grid</span>
            </p>
          </div>

          <div className="bg-above-mobile bg-cover bg-no-repeat bg-center w-[100%] h-[130px] mt-8 md:mt-0 md:bg-above-desktop md:w-[100%] md:h-[350px]">
            <p className="text-white text-2xl uppercase p-5 font-jose relative top-[30px]">
              {' '}
              From Up <span className="block">above Vr</span>
            </p>
          </div>

          <div className="bg-pocket-mobile bg-cover bg-no-repeat bg-center w-[100%] h-[130px] mt-8 md:mt-0 md:bg-pocket-desktop md:w-[100%] md:h-[350px]">
            <p className="text-white text-2xl uppercase p-5 font-jose relative top-[30px]">
              {' '}
              Pocket <span className="block">borealis</span>
            </p>
          </div>

          <div className="bg-curiosity-mobile bg-cover bg-no-repeat bg-center w-[100%] h-[130px] mt-8 md:mt-0 md:bg-curiosity-desktop md:w-[100%] md:h-[350px]">
            <p className="text-white text-2xl uppercase p-5 font-jose relative top-[30px]">
              {' '}
              The <span className="block">curiosity</span>
            </p>
          </div>

          <div className="bg-fisheye-mobile  bg-cover bg-no-repeat bg-center w-[100%] h-[130px] mt-8 md:mt-0 md:bg-fisheye-desktop md:w-[100%] md:h-[350px]">
            <p className="text-white text-2xl uppercase p-5 font-jose relative top-[30px]">
              {' '}
              Make <span className="block">Fisheye</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creations;
