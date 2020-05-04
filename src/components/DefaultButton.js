import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native'



export default styled.TouchableHighlight`
    width:${props => props.width || 'auto'}
    background-color:${props => props.bgcolor || '#DDD'}
    padding:10px 20px;
    border-radius:100px;
    justify-content:center;
    align-items:center;
`;