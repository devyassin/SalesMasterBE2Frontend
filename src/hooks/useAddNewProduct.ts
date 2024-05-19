import { FormEvent, useEffect } from "react";
import { ToastLoading, Toastfailed, Toastsuccess } from "../helpers/Toasts";
import { zodHandllingErrors } from "../helpers/zodHandllingErrors ";
import { useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { ProductValidation } from "../lib/validation/ClientValidation";
import { addProduct, clearStatusProduit } from "../store/ProductSlice";

const useAddNewProduct = () => {
  const dispatch = useDispatch<any>();
  const { produit, statusAddProducts, errorAddProducts } = useAppSelector(
    (state) => state.produits
  );

  useEffect(() => {
    if (statusAddProducts === "succeeded") {
      Toastsuccess("product Added successfully !");
      setTimeout(() => {
        dispatch(clearStatusProduit());
      }, 1500);
    }

    if (statusAddProducts === "failed") {
      Toastfailed(errorAddProducts);
    }

    if (statusAddProducts === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusAddProducts]);

  const addNewProduct = (e: FormEvent) => {
    e.preventDefault();
    console.log(produit);
    if (zodHandllingErrors(ProductValidation, produit)) {
      let { image, nom, description, prix, quantiteEnStock } = produit;
      let file = image;

      dispatch(addProduct({ file, nom, description, prix, quantiteEnStock }));
    }
  };
  return { addNewProduct };
};

export default useAddNewProduct;
