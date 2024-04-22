import { Categoria } from "../types/types"

const Category = ({imagem, alt, texto}:Categoria) => {
  return (
    <a href="#" className="categoria">
      <img src={imagem} alt={alt} />
      <p>{texto}</p>
    </a>
  )
}

export default Category
