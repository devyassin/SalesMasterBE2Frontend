import { FormEvent, useEffect } from "react";
import { ToastLoading, Toastfailed, Toastsuccess } from "../helpers/Toasts";
import { zodHandllingErrors } from "../helpers/zodHandllingErrors ";
import { useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { ProductValidation } from "../lib/validation/ClientValidation";
import { clearStatusProduit, updateOneProduct } from "../store/ProductSlice";
import { showFormModal, showoverlay } from "../store/ModalSlice";

const useUpdateOneProduct = () => {
  const dispatch = useDispatch<any>();
  const { produit, statusUpdateOneProducts, errorUpdateOneProducts } =
    useAppSelector((state) => state.produits);

  useEffect(() => {
    if (statusUpdateOneProducts === "succeeded") {
      Toastsuccess("product Updated successfully !");
      setTimeout(() => {
        dispatch(clearStatusProduit());
        dispatch(showFormModal());
        dispatch(showoverlay());
      }, 1500);
    }

    if (statusUpdateOneProducts === "failed") {
      Toastfailed(errorUpdateOneProducts);
    }

    if (statusUpdateOneProducts === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusUpdateOneProducts]);

  const updateProduct = (e: FormEvent) => {
    e.preventDefault();
    console.log(produit);
    if (zodHandllingErrors(ProductValidation, produit)) {
      let id = produit.produitId;
      console.log(id);
      console.log(produit);
      dispatch(updateOneProduct([id, produit]));
    }
  };
  return { updateProduct };
};

export default useUpdateOneProduct;
