import { ShoeSize } from "../types/types"

const SizeShoe = ({minSize,maxSize}: ShoeSize) => {
  const shoeSizeOptions: number[] = []
  function sizes(){
    for (let i = minSize; i <=maxSize; i++){
      shoeSizeOptions.push(i);
    }
    return shoeSizeOptions
  }
  return (
    <div>
      <span>Selecione um tamanho</span>
      <div>
        {sizes().map((size,index) => {
          return <button key={index}>{size}</button>
        })}
      </div>
      <div>Adicionar a sacola</div>
    </div>
  )
}

export default SizeShoe
