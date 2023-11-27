import { useEffect, useState } from "react"

const WIDTHS = [0, 1024, 1440, 1920];

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
            return {screenWidth, items: 3}
        case (screenWidth >= WIDTHS[2]):
            return {screenWidth, items: 2}
        case (screenWidth >= WIDTHS[1]):
            return {screenWidth, items: 1}
        default:
            return {screenWidth, items: 0}
    }
}

export default useScreenWidth