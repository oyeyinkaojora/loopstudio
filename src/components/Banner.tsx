import logo from '../assets/images/logo.svg';

const Banner = () => {
  return (
    <div className="bg-banner-mobile relative bg-center bg-cover bg-no-repeat h-[700px] w-full md:bg-banner-desktop">
      <div className="mx-[50px] md:mx-[150px]">
        <nav className="flex justify-between">
          <div className="mt-[50px] md:mt-[100px]">
            <img src={logo} width={120} alt="loopstudio" />
          </div>
          <div className="mt-[50px] md:hidden">
            <i
              className="fa fa-bars fa-2x text-white  "
              aria-hidden="true"
            ></i>
          </div>
          <div className="hidden md:text-white md:text-start md:flex md:mt-[100px]">
            <ul className="md:font-alata md:flex md:space-y-0 md:space-x-3 ">
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </div>
        </nav>
        <div className="flex mt-[150px]  items-center justify-center h-screen md:justify-start">
          <div className="h-full w-[300px] md:w-[700px]">
            <div className="m-5 border-2 border-white px-[5rem] py-[3rem] flex items-center justify-center">
              <h1 className="text-white text-4xl  uppercase font-jose font-[300] md:text-6xl">
                Immersive experiences that deliver
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
