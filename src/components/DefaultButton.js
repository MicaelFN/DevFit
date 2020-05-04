import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native-gesture-handler'



export default styled.TouchableHighlight`
    width:${props => props.width || 'auto'}
    background-color:${props => props.bgcolor || '#EEE'}
    padding:10px 20px;
    border-radius:100px;
    justify-content:center;
    align-items:center;
`;