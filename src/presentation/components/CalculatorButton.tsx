import { Pressable, Text } from "react-native"
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
    label: string;
    color?: string;
    isDoubleSize?: boolean;
    isBlackText?: boolean;

}

export const CalculatorButton = ({ label, 
    color = colors.darkGray, 
    isDoubleSize = false,
    isBlackText = false,
}: Props) => {
  return (
    <Pressable style={ ({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        width: ( isDoubleSize ) ? 180 : 80,
        opacity: (pressed) ? 0.8 : 1
    })}>
      <Text style={{
        ...styles.buttonText,
        color: (isBlackText) ? "black" : "white",
      }}>{ label }</Text>
    </Pressable>
  )
}
