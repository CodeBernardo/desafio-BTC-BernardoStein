import { motion } from "framer-motion";
import { CreateAdressesForm } from "../../components/forms/CreateAddressForm";

export const CreateAddressPage = (): JSX.Element => {
  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <CreateAdressesForm />
    </motion.div>
  );
};
