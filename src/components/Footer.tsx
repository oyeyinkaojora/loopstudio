import logo from '../assets/images/logo.svg';


const Footer = () => {
  return (
    <div className="w-[100vw] h-[30rem]  bg-black mt-[100px] md:h-[10rem] ">
      <div className="flex flex-col justify-center align-center md:justify-between md:flex-row md:m-8">
        <div className="text-center mx-auto mt-[50px] md:mx-0">
          <img src={logo} width="100px" height="100px" alt="logo" />
          <div className="text-white  text-center mt-8 md:text-start md:mt-2">
            <ul className="space-y-4 font-alata md:flex md:space-y-0 md:space-x-3 ">
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        <div className="text-center font-alata text-darkgray mt-[50px] md:text-start">
          <div className='flex space-x-5 justify-center  md:justify-end '>
          <i className="fa fa-facebook text-white" aria-hidden="true"></i>
          <i className="fa fa-twitter text-white" aria-hidden="true"></i>
          <i className="fa fa-pinterest text-white" aria-hidden="true"></i>
          <i className="fa fa-instagram text-white" aria-hidden="true"></i>
          </div>
          <p className='md:mt-2'>© 2023 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
