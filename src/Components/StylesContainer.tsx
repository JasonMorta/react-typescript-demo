
import { ContainerStyles } from "./stylesContainer.types"


const StylesContainer = ({styles, mouseHoverEnter, mouseHoverLeave}: ContainerStyles) => {
    return (
        <div 
            style={styles} 
            onMouseEnter={mouseHoverEnter}
            onMouseLeave={mouseHoverLeave}
             >
            Styled Component
        </div>
    )
}

export default StylesContainer