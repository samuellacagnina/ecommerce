import { useState } from "react";
import ButtonPopularProps from "./ButtonPopular.interface";

export const ButtonPopular = ({isAscending,handleSort}:ButtonPopularProps) => {



    return(
        <div>
            <button className="bg-[#f4f5fb] px-6 py-4 rounded-md" type="button">POPULAR</button>
        </div>
    )
}