import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import { useLocation } from "react-router";
import { trash } from "ionicons/icons";
import { formatNumberCurrency } from "../utils/formatNumberCurrency";
import { useFavorites } from "../hooks/useFavorites";

const Tab2: React.FC = () => {
  const route = useLocation();
  const {
    favorites,
    setFavorites,
    sortCriteria,
    setSortCriteria,
    sortFavorites,
  } = useFavorites(undefined, route);

  // Manejar cambio en el criterio de ordenamiento
  const handleSortChange = (criteria: string) => {
    setSortCriteria(criteria);
    localStorage.setItem("sortCriteria", criteria); // Guardar el criterio de ordenamiento en localStorage
    sortFavorites(criteria, favorites);
  };

  // Eliminar producto de favoritos
  const handleRemoveFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Productos deseados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Interfaz para elegir criterio de ordenamiento */}
        <div style={{ padding: "16px" }}>
          <IonSelect
            placeholder="Ordenar por"
            value={sortCriteria}
            onIonChange={(e) => handleSortChange(e.detail.value)}
          >
            <IonSelectOption value="name">Nombre</IonSelectOption>
            <IonSelectOption value="price">Precio</IonSelectOption>
          </IonSelect>
        </div>

        {/* Lista de productos deseados */}
        <IonList>
          {favorites.map((product) => (
            <IonItem key={product.id}>
              <div className="cardContainer">
                <div className="cardSection">
                  <IonImg
                    src={product.category.image}
                    alt={product.title}
                    className="productImage"
                  ></IonImg>
                  <IonLabel>
                    <h2 className="productTitle">{product.title}</h2>
                    <p>{product.category.name}</p>
                    <p>{formatNumberCurrency(product.price)}</p>
                  </IonLabel>
                </div>
                <IonButton
                  color="danger"
                  onClick={() => handleRemoveFavorite(product.id)}
                  className="deleteButton"
                >
                  <IonIcon aria-hidden="true" icon={trash} />
                </IonButton>
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
