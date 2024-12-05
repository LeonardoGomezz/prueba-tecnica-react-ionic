import React, { SetStateAction } from "react"

interface ProductCategory {
  id: number
  name: string
  image: string
}
export interface ProductCardProps {
  id: number
  title: string
  price: number
  description: string
  category: ProductCategory
  images?: string[]
}

export interface ProductDataResponse {
  data: ProductCardProps[]
  totalPages: number
  currentPage: number
}

export interface PaginetaionProps {
  pages: number[]
  pageNumber?: number
  setPageNumber?: (value: number) => void
  totalPages?: number
  selected?: number
  setSelected?: (value: number) => void
}

export interface SearchBarProps {
  products: ProductDataResponse
  searchText: string 
  setSearchText: React.Dispatch<SetStateAction<string>>
  onSearch: (results: any[]) => void
  onReset: () => void
}