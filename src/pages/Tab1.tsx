import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { SearchBar } from "../components/SearchBar";
import ReactPaginate from "react-paginate";
import "./Tab1.css";
import { CgPlayTrackPrev } from "react-icons/cg";
import { CgPlayTrackNext } from "react-icons/cg";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const {
    products,
    fetchInitialProducts,
    handleSearch,
    setCurrentPage,
    totalPage,
  } = useProducts(12, searchText);

  const handleReset = () => {
    fetchInitialProducts();
  };

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pagina de productos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SearchBar
          onSearch={handleSearch}
          onReset={handleReset}
          searchText={searchText}
          setSearchText={setSearchText}
          products={products}
        />
        <IonGrid>
          <IonRow>
            {products?.data.map((item) => (
              <IonCol
                key={item.id}
                size="12"
                sizeSm="6"
                sizeLg="4"
                sizeXl="3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ProductCard item={item} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <ReactPaginate
          breakLabel="..."
          pageCount={totalPage}
          previousLabel={<CgPlayTrackPrev />}
          nextLabel={<CgPlayTrackNext />}
          onPageChange={handlePageClick}
          containerClassName={"paginationsBtns"}
          previousClassName={"prevBtn"}
          nextClassName={"nextBtn"}
          disabledClassName={"paginationsDisable"}
          activeClassName={"paginationsActive"}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
