import { FirstColumn } from "./firstColumn/FirstColumn"

export const Footer = () => {
    return(
        <div className="block sm:flex">
            <div>
            <FirstColumn />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-6">
            <FirstColumn />
            <FirstColumn />
            <FirstColumn />
            <FirstColumn />
            <FirstColumn />
            </div>
        </div>
    )
}