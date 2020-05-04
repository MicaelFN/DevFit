import React from 'react';
import styled from 'styled-components/native'
import {Text} from 'react-native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
    flex:1;
    /* justify-content:center; */
    align-items:center;
    margin-left:30px;
    margin-right:30px;
    margin-top:50px;
`;
const HeaderText =styled.Text`
    font-size:15px;
    color:#333;
    margin-bottom:50px;
    text-align:center;
`;
const BoldText = styled.Text`
    font-weight:bold;
`;
const DaysArea = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
`;

const NextButton = styled.Button``;

const Page = (props) => {

    const nextAction = () => {
        if(!props.name){
            alert('Voce precisa digitar um nome!');
            return
        }
        props.navigation.navigate('StarterDias');
    }

    const handleChangeName = (t) => {
        props.setName(t);
        props.navigation.setParams({name:t})
    }

    let firstName = props.name.split(' ')[0] // pega apenas a string antes do pimeiro espaço

    return(
        
        <Container>
           <HeaderText>Olá, <BoldText>{firstName}</BoldText>, tudo bem?</HeaderText>
           <HeaderText>Quais dias da semana você pretende treinar?</HeaderText>

           <DaysArea>
               <DefaultButton width={100} style={{marginBottom:20}}>
                   <Text>Domingo</Text>
               </DefaultButton>
               <DefaultButton width={100} style={{marginBottom:20}}>
                   <Text>Segunda</Text>
               </DefaultButton >
               <DefaultButton width={100} style={{marginBottom:20}}>
                   <Text>Terça</Text>
               </DefaultButton>
               <DefaultButton width={100} style={{marginBottom:20}}>
                   <Text>Quarta</Text>
               </DefaultButton>
               <DefaultButton width={100} style={{marginBottom:20}}>
                   <Text>Quinta</Text>
               </DefaultButton>
               <DefaultButton width={100} style={{marginBottom:20}}>
                   <Text>Sexta</Text>
               </DefaultButton>
               <DefaultButton width={100} style={{marginBottom:20}}>
                   <Text>Sábado</Text>
               </DefaultButton>
           </DaysArea>
           
        </Container>
    );
}

Page.navigationOptions = ({navigation}) => {

    const nextAction = () => {
        if(!navigation.state.params || !navigation.state.params.name){
            alert('Voce precisa digitar um nome!');
            return
        }
        navigation.navigate('StarterDias')
    }
    return{
        title:'',
        headerRight: <NextButton title='Proximo' onPress={nextAction} />,
        headerRightContainerStyle:{
            marginRight:10
        }
    }
    //header:null
}

const mapStateToProps = (state) => {
    return{
        name:state.useReducer.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setName:(name)=>dispatch({type:'SET_NAME', payload:{name}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);