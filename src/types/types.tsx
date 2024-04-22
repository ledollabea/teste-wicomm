import { ReactNode } from "react";

export interface ItemPagamento {
  texto: string;
  icone: ReactNode;
}

export interface Categoria {
  texto: string;
  alt: string;
  imagem: string;
}

export interface Carousel {
  src: string;
  alt: string;
  favorite: boolean;
  minSize: number;
  maxSize: number;
  titulo: string;
  preco: string;
  antigoPreco: string;
  parcelas: string;
}

export interface ShoeSize {
  minSize: number;
  maxSize: number;
}
