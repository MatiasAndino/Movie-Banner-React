import { useEffect, useState } from "react"

const WIDTHS = [0, 700, 1100, 1400];

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const detectSize = (event) => {
        event.preventDefault();
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {

        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [screenWidth])


    

    switch (true) {
        case (screenWidth >= WIDTHS[3]):
            return {screenWidth, items: 6}
        case (screenWidth >= WIDTHS[2]):
            return {screenWidth, items: 5}
        case (screenWidth >= WIDTHS[1]):
            return {screenWidth, items: 4}
        default:
            return {screenWidth, items: 3}
    }
}

export default useScreenWidth