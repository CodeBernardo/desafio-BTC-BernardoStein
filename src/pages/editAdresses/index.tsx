import { motion } from "framer-motion";
import { EditAdressForm } from "../../components/forms/editAddressForm";

export const EditAddressPAge = (): JSX.Element => {
  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <EditAdressForm />
    </motion.div>
  );
};
