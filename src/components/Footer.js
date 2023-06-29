import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" mt-10 bottom-0 left-0 right-0 w-full overflow-hidden" style={{ transform: 'translateZ(0)' }}>


      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-md mt-0 mb-2 text-blueGray-600">
            You can find us on any of these platforms and we'll respond immediately! We're always available to chat and answer any questions you may have.            </h5>
            <div className="mt-6 lg:mb-0 mb-6 items-center text-center justify-center">
            <div className="social-icons flex flex-wrap text-center items-center">
                <a href="https://www.facebook.com/profile.php?id=100089662386775&mibextid=LQQJ4d" target='_blank'>
                <SocialIcon network="facebook" style={{ height: 35, width: 35 }} className='text-transparent bg-transparent' />
                </a>
                <a href="https://www.twitter.com/payv3rse?s=21&t=W9T650l41dYZ-uWS50co-A" target='_blank'>
                <SocialIcon network="twitter" style={{ height: 35, width: 35 }} className='text-white' />
                </a>
                <a href="https://www.instagram.com/payv3rse?igshid=YmMyMTA2M2Y=" target='_blank'>
                <SocialIcon network="instagram" style={{ height: 35, width: 35 }} className='text-white' />
                </a>
                <a href="https://t.me/payv3rsebymac?ref=dishapages" target='_blank'>
                <SocialIcon network="telegram" style={{ height: 35, width: 35 }} className='text-white' />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <Link to='./about'>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">
                      About Us
                    </a>
                  </li>
                  </Link>
                  <Link to='/blog'>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">
                      Blog
                    </a>
                  </li>
                  </Link>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#faqs">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://wa.me/+2348108296519">
                      Trade Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-blueGray-300" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold mb-5 py-1">
              © {currentYear} Payv3rse
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
