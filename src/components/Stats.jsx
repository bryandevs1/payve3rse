import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";


const Stats = () => (
  <section className={`${styles.flexCenter} px40l flex-row flex-wrap sm:mb-48 mb-48`}>
      <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font font-semibold xs:text-[40.89px] text-4xl xs:leading-[53.16px] leading-[43.16px] text-black">
          <CountUp end={80} duration={10} />+
        </h4>
        <p className="font font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          ACTIVE USERS
        </p>
      </div>

      <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font font-semibold xs:text-[40.89px] text-4xl xs:leading-[53.16px] leading-[43.16px] text-black">
          <CountUp end={518} duration={10} />+
        </h4>
        <p className="font font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          POSITIVE FEEDBACKS
        </p>
      </div>
      <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font font-semibold xs:text-[40.89px] text-4xl xs:leading-[53.16px] leading-[43.16px] text-black">
          <CountUp end={2000} duration={10} />+
        </h4>
        <p className="font font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          TRANSACTIONS
        </p>
      </div>

  </section>
);

export default Stats;
