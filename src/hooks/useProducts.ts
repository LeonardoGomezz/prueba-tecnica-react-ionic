import { useEffect, useState } from "react";
import { ProductCardProps, ProductDataResponse } from "../components/types";
import { getAllProducts } from "../service/productService";
import paginationFunction from "../utils/paginationFucntion";

const useProducts = (
  itemsPerPage: number,
  title?: string,
  refresh?: boolean
) => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<ProductDataResponse>({
    data: [],
    totalPages: 0,
    currentPage: 0,
  });

  // Función para obtener los productos iniciales
  const fetchInitialProducts = async () => {
    try {
      let initialProducts: ProductCardProps[] = [];
      if (title && title !== "") {
        initialProducts = await getAllProducts(undefined, undefined, title);
      } else {
        initialProducts = await getAllProducts();
      }
      const dataPaginate: ProductDataResponse = await paginationFunction(
        initialProducts,
        currentPage,
        itemsPerPage
      );
      setTotalPage(dataPaginate.totalPages);
      setCurrentPage(dataPaginate.currentPage);
      setProducts(dataPaginate);
    } catch (error) {
      console.error("Error al obtener los productos iniciales", error);
    }
  };

  // Función para manejar la búsqueda
  const handleSearch = (results: ProductCardProps[]) => {
    if (results.length > 0) {
      setProducts((prevState) => ({
        ...prevState,
        data: results,
        totalPages: 1,
        currentPage: 1,
      }));
    } else {
      console.warn("No se encontraron resultados para la búsqueda.");
    }
  };

  // Efecto para cargar los productos iniciales
  useEffect(() => {
    fetchInitialProducts();
  }, [currentPage, title, refresh]);

  return {
    products,
    fetchInitialProducts,
    handleSearch,
    currentPage,
    setCurrentPage,
    totalPage,
  };
};

export default useProducts;
