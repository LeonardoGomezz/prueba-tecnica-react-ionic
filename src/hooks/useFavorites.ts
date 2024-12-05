import { useIonToast } from "@ionic/react";
import { useCallback, useEffect, useState } from "react";
import { ProductCardProps } from "../components/types";

export const useFavorites = (product?: ProductCardProps, route?: unknown) => {
  const [presentToast] = useIonToast();
  const [favorites, setFavorites] = useState<ProductCardProps[]>([]);
  const [sortCriteria, setSortCriteria] = useState<string>("name");

  const addToFavorites = useCallback(() => {
    const existingFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    // Evitar duplicados
    if (product) {
      const isAlreadyFavorite = existingFavorites.some(
        (item: ProductCardProps) => item.id === product.id
      );
      if (isAlreadyFavorite) {
        presentToast({
          message: `${product.title} ya está en favoritos`,
          duration: 2000,
          position: "middle",
          color: "warning",
        });
        return;
      }

      const updatedFavorites = [...existingFavorites, product];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      presentToast({
        message: `${product.title} agregado a favoritos`,
        duration: 2000,
        position: "middle",
        color: "success",
      });
    }
  }, [presentToast]);

  // Recuperar los productos favoritos y el criterio de ordenamiento desde localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const storedSortCriteria = localStorage.getItem("sortCriteria") || "name";
    setSortCriteria(storedSortCriteria);

    // Si no hay productos, no hacemos nada
    if (storedFavorites.length === 0) return;

    // Ordenamos los productos con el criterio guardado
    sortFavorites(storedSortCriteria, storedFavorites);
  }, [route]);

  const sortFavorites = (criteria: string, favorites: ProductCardProps[]) => {
    const sorted = [...favorites].sort((a, b) => {
      if (criteria === "name") {
        return a.title.localeCompare(b.title);
      } else if (criteria === "price") {
        return a.price - b.price;
      }
      return 0;
    });
    setFavorites(sorted);
    localStorage.setItem("favorites", JSON.stringify(sorted));
  };

  return {
    addToFavorites,
    favorites,
    setFavorites,
    sortCriteria,
    setSortCriteria,
    sortFavorites,
  };
};
