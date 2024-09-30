import { assests } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer py-16">
     
      {/* wrapper */}
      <div className="w-90vw  m-auto flex grid-col md:grid-row items-start mt-10 gap-16 max-w-6xl" >
        

        {/* navigation */}
        <div className="flex items-center justify-between w-full grid-cols-2 px-4 gap-8 flex-wrap">
          <div>
            <h2 className="text-xl text-primary-300 font-bold">Product</h2>
            <ul className="space-y-4 mt-6">
              <li>Overview</li>
              <li>Features</li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-primary-300 font-bold">Company</h2>
            <ul className="space-y-4 mt-6">
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-primary-300 font-bold">Support</h2>
            <ul className="space-y-4 mt-6">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h2 className="text-xl text-primary-300 font-bold">Follow us</h2>
            <ul className="space-y-4 mt-6">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Dribble</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
        {/* end of navigation */}
      </div>
      {/* end of wrapper */}
       {/* about */}
       <div className="px-8 mb-8">
          <div className="w-32">
            <img src={assests.Logo} alt="" width={"100%"} />
          </div>
          <p className="text-gray-primary">
            © 2020 Mobile Mart. All rights reserved.
          </p>
        </div>
        {/* end of about */}
    </div>
  );
};

export default Footer;
