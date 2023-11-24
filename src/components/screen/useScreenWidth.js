import { useEffect, useState } from "react"

const medidas = {
    0 : [0,768],
    1 : [769,1024],
    2 : [1025,1440],
    3 : [1441],
}
const widths = [0,768,1024,1440];

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const detectSize = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {

        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [screenWidth])


    
    
    console.log(screenWidth)
    
    // return widths.find((item, index) => {
    //     console.log(screenWidth, item, widths[index + 1]);
    //     if (screenWidth >= item && screenWidth <= widths[index + 1]) return 'perro';
    //     return 3;
    // });

    switch (true) {
        case (screenWidth >= widths[3]):
            return 3
        case (screenWidth >= widths[2]):
            return 2
        case (screenWidth >= widths[1]):
            return 1
        default:
            return 0
            break;
    }
}

export default useScreenWidth