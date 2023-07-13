import { useState } from "react"
import LoadMoreButtonProps from "./LoadMoreButton.interface"

interface CardData {
    
}

export const LoadMoreButton = ({itemsToShow}:LoadMoreButtonProps) => {
    const [itemToShow, setItemToShow] = useState(28); // Imposta il numero iniziale di cards da mostrare
    const [cardsData, setCardsData] = useState<CardData[]>([]);
    
    const loadMoreItems = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos`) 
            const data = await response.json()
            setCardsData([...cardsData, ...data]); // Aggiungi i nuovi dati alle cards esistenti
            setItemToShow(itemToShow + 28);
            console.log(data);
            
        }catch(error){
            console.log(error);
        }
    }



  return (
    <div className="flex justify-center font-bold">
        <button className='bg-[#f4f5fb] px-14 py-4 rounded-lg' onClick={loadMoreItems}>Load more Shots</button>
        <p>{ itemToShow }</p>
    </div>
  )
}




