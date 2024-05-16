import { useDispatch } from "react-redux";
import { inputStyle } from "../../constants/styling";
import { useAppSelector } from "../../store/store";
import GreenBtn from "../ui/button/GreenBtn";
import InputFileUpload from "./InputFileUpload";

import FormModal from "./Modal";
import { ChangeEvent } from "react";
import { handleGigForm } from "../../store/ProductSlice";
import { Produit } from "../../types";
import useUpdateOneProduct from "../../hooks/useUpdateOneProduct";
import useRemoveOneProduct from "../../hooks/useRemoveProduct";

const ProductForm = () => {
  const dispatch = useDispatch<any>();
  const produit: Produit = useAppSelector((state) => state.produits.produit);
  const formType = useAppSelector((state) => state.modals.formType);
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let { name, value }: any = event.target;

    dispatch(handleGigForm({ name, value }));
  };

  const { updateProduct } = useUpdateOneProduct();
  const { removeOneProduct } = useRemoveOneProduct();
  return (
    <FormModal
      yaxe="-50%"
      formHeader={`${
        formType === "add" ? "Ajouer Produit" : "Modifier Produit"
      }`}
    >
      <form
        onSubmit={formType === "add" ? () => {} : updateProduct}
        className="grid grid-cols-3 gap-8"
      >
        <InputFileUpload produitImg={produit.image} formType={formType} />
        <div className="flex flex-col justify-between">
          <input
            name="nom"
            className={inputStyle}
            onChange={handleChange}
            value={produit.nom}
            type="text"
            placeholder="Nom"
          />
          <input
            name="prix"
            className={inputStyle}
            min={0}
            step={0.01}
            value={produit.prix}
            type="number"
            onChange={handleChange}
            placeholder="Prix"
          />
          <input
            name="quantiteEnStock"
            className={inputStyle}
            value={produit.quantiteEnStock}
            type="number"
            onChange={handleChange}
            min={0}
            placeholder="Quantité En Stock"
          />
        </div>
        <textarea
          name="description"
          className={`${inputStyle} col-span-3 little-scrollbar`}
          rows={4}
          value={produit.description}
          onChange={handleChange}
          cols={50}
          placeholder="Description"
        />
        <div className="pt-4 flex space-x-4">
          <GreenBtn
            text={`${formType === "add" ? "Ajouter" : "Modifer"}`}
            customClasses="py-2 px-8"
          />
          {formType !== "add" && (
            <div
              onClick={() => {
                removeOneProduct();
              }}
            >
              <GreenBtn
                typeBtn="button"
                text={"Supprimer"}
                customClasses="py-2 px-8 bg-soft-read"
              />
            </div>
          )}
        </div>
      </form>
    </FormModal>
  );
};

export default ProductForm;
