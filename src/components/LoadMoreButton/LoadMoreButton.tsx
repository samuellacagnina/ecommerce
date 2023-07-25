import { useState } from "react"
import LoadMoreButtonProps from "./LoadMoreButton.interface"

interface CardData {}

export const LoadMoreButton = ({ handleView }: LoadMoreButtonProps) => {


  return (
    <div className="flex justify-center font-bold">
      <button
        className="bg-[#f4f5fb] px-14 py-4 rounded-lg"
        onClick={handleView}
      >
        Load more Shots
      </button>
    </div>
  )
}


