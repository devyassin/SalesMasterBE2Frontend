import { useDispatch } from "react-redux";
import { InventaireHeaderIcon } from "../../assets";
import Header from "../../components/header/Header";
import { useAppSelector } from "../../store/store";
import { useEffect } from "react";
import {
  GoToPage,
  NextPage,
  PreviousPage,
  SearchProductByName,
  clearProduit,
  getAllProducts,
} from "../../store/ProductSlice";
import Pagination from "../../components/table/Pagination";
import TableFunctions from "../../components/table/TableFunctions";
import ProductCards from "../../components/inventaire/ProductCards";

import ProductForm from "../../components/form/ProductForm";
import { SetFormType, showFormModal } from "../../store/ModalSlice";
import { Produit } from "@/types";

const Inventaire = () => {
  const dispatch = useDispatch<any>();
  const produits: Produit[] = useAppSelector(
    (state) => state.produits.data.content
  );
  const { page, totalPages, totalElementsInTable } = useAppSelector(
    (state) => state.produits.data
  );
  const name = useAppSelector((state) => state.produits.name);

  const productFormModalVisibility: any = useAppSelector(
    (state) => state.modals.FormModalVisibility
  );
  useEffect(() => {
    let size = 12;
    dispatch(getAllProducts([(size = 12), page, name]));
  }, [page, name]);
  return (
    <div className="flex flex-col">
      <Header
        image={InventaireHeaderIcon}
        description="inventaire logo"
        title={"Inventaire"}
        number={totalElementsInTable}
      />
      <TableFunctions
        nameSearchBar="search produit"
        placeholder="Enter le nom d'un produit"
        onShowFormModal={() => {
          dispatch(showFormModal());
          dispatch(SetFormType({ formType: "add" }));
          dispatch(clearProduit());
        }}
        onSearch={(value: string) =>
          dispatch(SearchProductByName({ name: value }))
        }
        csvData={produits}
        filename="produits"
      />
      {productFormModalVisibility && <ProductForm />}

      <div className="overflow-y-scroll scroll scroll-smooth scrollbar-hide  h-[70vh] py-10 mt-2">
        <ProductCards produits={produits} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onNextPage={() => dispatch(NextPage())}
          onGoToPage={(element: number) =>
            dispatch(GoToPage({ page: element - 1 }))
          }
          onPreviousPage={() => dispatch(PreviousPage())}
        />
      </div>
    </div>
  );
};

export default Inventaire;
