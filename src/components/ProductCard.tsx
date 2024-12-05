import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import { ProductCardProps } from "./types";
import "./ProductCard.css";
import { formatNumberCurrency } from "../utils/formatNumberCurrency";
import { heart } from "ionicons/icons";
import { useFavorites } from "../hooks/useFavorites";

interface Props {
  item: ProductCardProps;
}

export const ProductCard = ({ item }: Props) => {
  const product = {
    id: item.id,
    title: item.title,
    price: item.price,
    category: item.category,
    description: item.description,
  };
  const { addToFavorites, favorites } = useFavorites(product);
  const truncatedDescription =
    item.description.length > 32
      ? `${item.description.substring(0, 100)}...`
      : item.description;

  return (
    <IonCard
      style={{
        maxWidth: "300px",
        position: "relative",
      }}
    >
      <img alt={item.title} src={item.category?.image} />
      <IonCardHeader>
        <IonCardTitle className="title">{item.title}</IonCardTitle>
        <IonCardSubtitle color={"primary"} className="price">
          {formatNumberCurrency(item.price)}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>{truncatedDescription}</IonCardContent>
      <IonButton
        shape="round"
        fill="clear"
        style={{ position: "absolute", top: "8px", right: "8px" }}
        onClick={addToFavorites}
      >
        <IonIcon color={"warning"} slot="icon-only" icon={heart}></IonIcon>
      </IonButton>
    </IonCard>
  );
};
