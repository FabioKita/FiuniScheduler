import { useColorContext } from "src/contexts/color-context";
import useOnFocus from "./on-focus";

const useSetColor = ({
    mainColor = "#ffffff",
    darkColor,
    lightColor,
    duration = 250
})=>{
    const { setColor } = useColorContext();

    useOnFocus(()=>{
        setColor({
            mainColorString:mainColor,
            darkColorString:darkColor,
            lightColorString:lightColor,
            duration
        });
    },[mainColor, darkColor, lightColor, duration])
}

export default useSetColor;