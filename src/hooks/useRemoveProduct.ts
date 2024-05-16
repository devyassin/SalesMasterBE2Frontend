import { useEffect } from "react";
import { ToastLoading, Toastfailed, Toastsuccess } from "../helpers/Toasts";
import { useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { clearStatusProduit, removeProduct } from "../store/ProductSlice";

const useRemoveOneProduct = () => {
  const dispatch = useDispatch<any>();
  const { produit, statusRemoveProducts, errorRemoveProducts } = useAppSelector(
    (state) => state.produits
  );

  useEffect(() => {
    if (statusRemoveProducts === "succeeded") {
      Toastsuccess("product Removed successfully !");
      setTimeout(() => {
        dispatch(clearStatusProduit());
      }, 1500);
    }

    if (statusRemoveProducts === "failed") {
      Toastfailed(errorRemoveProducts);
    }

    if (statusRemoveProducts === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusRemoveProducts]);

  const removeOneProduct = () => {
    let id = produit.produitId;
    dispatch(removeProduct(id));
  };
  return { removeOneProduct };
};

export default useRemoveOneProduct;
