import { FirstColumn } from "./firstColumn/FirstColumn"
import { SecondColumn } from "./secondColumn/SecondColumn"

export const Footer = () => {
    return(
        <div className="flex gap-36 px-8 sm:flex">
            <div className="w-1/4">
            <FirstColumn />
            </div>
            <div className="flex gap-16">
            <SecondColumn/>
            <SecondColumn/>
            <SecondColumn/>
            <SecondColumn/>
            <SecondColumn/>
            </div>
        </div>
    )
}