import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} w-32 sm:min-w-48 min-w-48`}>
          <img src={client.logo} alt="client_logo" className="sm:w-48 w-28 object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
