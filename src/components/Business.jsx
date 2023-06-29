import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-cards`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font font-semibold text-black text-xl leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="services" className={`${layout.section} pl-20 businesss`}>
    <div className={`${layout.sectionInfo} businessdiv`}>
      <h2 className='font-semibold xs:text-[48px] text-4xl text-black xs:leading-[76.8px] leading-[66.8px] w-full'>
      Instantly Buy & Sell Bitcoin <p>- Start Trading Crypto Today.</p> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Look no further than The Payv3rse By Mac! With our fast and reliable payment policies, you can get instant payments on confirmations. Don't wait any longer to start trading!      </p>

      <div className={`flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <a target="blank" href="https://wa.me/+2348108296519" className={`py-4 cursor-pointer cp px-6 font-poppins font-medium text-[18px] text-primary bg-[#ffd800] rounded-full busbutt mt-10 outline-none ${styles}`}>
    Get Started
    </a>
    </div>    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
