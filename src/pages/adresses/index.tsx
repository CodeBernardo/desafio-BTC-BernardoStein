import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AddressCard } from "../../components/cards/addressCard";
import {
  AddressContext,
  AddressContextType,
} from "../../providers/addressContext";
import s from "./index.module.scss";

export const AddressesPage = (): JSX.Element => {
  const { addressList } = useContext(AddressContext) as AddressContextType;
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
   const staggeredItens = stagger(0.055);

  if (isInView) {
    animate(
      "li",
      { opacity: [0, 1], y: [10, 0] },
      { duration: 0.3, delay: staggeredItens },
    );
  }

  const navigate = useNavigate();

  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <div className={`align ${s.page__header}`}>
        <button aria-label="Return">
          <FaArrowLeft size={16} />
        </button>
        <h1 className="title3 bold ">Address</h1>
      </div>
      <div className={`align ${s.addressList__container}`}>
        <div className={s.addresslist__items}>
          <div className={`${s.search__container}`}>
            <input type="text" placeholder="Search address" />
            <button
              className="text3 medium"
              onClick={() => navigate("/create")}
            >
              Add address
            </button>
          </div>
          <h2 className="text2 bold">Address list</h2>
          <ul ref={scope}>
            {addressList.map((address, idx) => {
              return (
                <li key={idx}>
                  <AddressCard data={{ ...address }} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
