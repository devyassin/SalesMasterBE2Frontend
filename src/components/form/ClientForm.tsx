import { ChangeEvent } from "react";
import GreenBtn from "../ui/button/GreenBtn";
import FormModal from "./Modal";
import { useDispatch } from "react-redux";
import { handleGigForm, updateOneClient } from "../../store/ClientSlice";
import useAddNewClient from "../../hooks/useAddNewClient";
import { useAppSelector } from "../../store/store";
import { Client } from "../../types";
import useUpdateOneClient from "../../hooks/useUpdateOneClient";

const ClientForm = () => {
  const dispatch = useDispatch<any>();

  const client: Client = useAppSelector((state) => state.clients.client);
  const formType = useAppSelector((state) => state.modals.formType);

  const { addNewClient } = useAddNewClient();

  const { updateClient } = useUpdateOneClient();

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let { name, value }: any = event.target;
    dispatch(handleGigForm({ name, value }));
  };

  const inputStyle = `px-6 py-4 w-full outline-none input-creategig`;
  return (
    <FormModal
      formHeader={`${formType === "add" ? "Ajouer Client" : "Modifier Client"}`}
    >
      <form
        onSubmit={formType === "add" ? addNewClient : updateClient}
        className="flex flex-col space-y-6 pt-4 tracking-wider font-tajwal"
      >
        <div className={`flex items-center w-full space-x-14 `}>
          <input
            name="nom"
            value={client.nom}
            className={inputStyle}
            onChange={handleChange}
            type="text"
            placeholder="Nom"
          />
          <input
            name="email"
            value={client.email}
            className={inputStyle}
            onChange={handleChange}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className={`flex items-center w-full space-x-14 `}>
          <input
            name="telephone"
            value={client.telephone}
            className={inputStyle}
            onChange={handleChange}
            type="text"
            placeholder="Telephone"
          />
          <input
            name="adresse"
            value={client.adresse}
            className={inputStyle}
            onChange={handleChange}
            type="text"
            placeholder="Adresse"
          />
        </div>
        <div className="pt-4">
          <GreenBtn
            text={`${formType === "add" ? "Ajouter" : "Modifer"}`}
            customClasses="py-2 px-8"
          />
        </div>
      </form>
    </FormModal>
  );
};

export default ClientForm;
