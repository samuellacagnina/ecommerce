import LoadMoreButtonProps from "./LoadMoreButton.interface"

export const LoadMoreButton = ({itemsToShow}:LoadMoreButtonProps) => {

    const loadMoreItems = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${itemsToShow + 28}`) 
            const data = await response.json()
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }



  return (
    <div className="flex justify-center font-bold">
        <button className='bg-[#f4f5fb] px-14 py-4 rounded-lg' onClick={loadMoreItems}>Load more Shots</button>
        <p>{ itemsToShow }</p>
    </div>
  )
}




