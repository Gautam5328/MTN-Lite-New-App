import { Dimensions } from "react-native";

const figmaWidth: number = 375
const figmaHeight: number = 812

export function getScaleSize(size: number): number {
    const { width, height } = Dimensions.get('window');
    const scaleWidth = width / figmaWidth;
    const scaleHeight = height / figmaHeight
    const scale = Math.min(scaleWidth, scaleHeight);
    const fontsize = Math.ceil((size * scale))
    return fontsize
}