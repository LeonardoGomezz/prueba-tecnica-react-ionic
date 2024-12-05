import { IonSearchbar } from "@ionic/react";
import { SearchBarProps } from "./types";

export const SearchBar = ({
  onSearch,
  onReset,
  searchText,
  setSearchText,
  products,
}: SearchBarProps) => {
  const handleSearch = async (event: CustomEvent) => {
    const title = event.detail.value;
    setSearchText(title);

    if (title) {
      try {
        onSearch(products as any);
      } catch (error) {
        console.error("Error en la búsqueda:", error);
      }
    } else {
      onReset();
    }
  };
  return (
    <div
      style={{
        marginTop: "32px",
        marginBottom: "32px",
        maxWidth: "700px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <IonSearchbar
        animated={true}
        placeholder="Buscar Productos"
        debounce={1000}
        value={searchText}
        onIonInput={handleSearch}
      />
    </div>
  );
};
