import axios from "axios";

export const getAllProducts = async (page?: number, limit?: number, title?: string) => {
  const urlBase = 'https://api.escuelajs.co/api/v1/products'
  const urlPaginate = `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${limit}`
  const urlSearch = `https://api.escuelajs.co/api/v1/products/?title=${title}`
  try {
    const res = await axios.get(
      title ? urlSearch : page ? urlPaginate : urlBase
    );
    return res.data;
  } catch (error) {
    console.error("Error al obtener productos", error);
    throw error;
  }
};

