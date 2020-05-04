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

    const toggleDay = (d) => {
        let newWorkoutDays = [...props.workoutDays];
        if(!props.workoutDays.includes(d)){
            newWorkoutDays.push(d);
            
        }else{
            newWorkoutDays = newWorkoutDays.filter(i=>i!=d);
        }
        props.setWorkoutDays(newWorkoutDays);
        props.navigation.setParams({workoutDays:newWorkoutDays})
    }

    let firstName = props.name.split(' ')[0] // pega apenas a string antes do pimeiro espaço

    return(
        
        <Container>
           <HeaderText>Olá, <BoldText>{firstName}</BoldText>, tudo bem?</HeaderText>
           <HeaderText>Nível</HeaderText>

           <DaysArea>
               <DefaultButton bgcolor={props.workoutDays.includes(0)?'#AAA':false} onPress={()=>toggleDay(0)} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Domingo</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.workoutDays.includes(1)?'#AAA':false} onPress={()=>toggleDay(1)} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Segunda</Text>
               </DefaultButton >
               <DefaultButton bgcolor={props.workoutDays.includes(2)?'#AAA':false} onPress={()=>toggleDay(2)} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Terça</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.workoutDays.includes(3)?'#AAA':false} onPress={()=>toggleDay(3)} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Quarta</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.workoutDays.includes(4)?'#AAA':false} onPress={()=>toggleDay(4)} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Quinta</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.workoutDays.includes(5)?'#AAA':false} onPress={()=>toggleDay(5)} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Sexta</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.workoutDays.includes(6)?'#AAA':false} onPress={()=>toggleDay(6)} width={100} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Sábado</Text>
               </DefaultButton>
           </DaysArea>
           
        </Container>
    );
}

Page.navigationOptions = ({navigation}) => {

    const nextAction = () => {
        if(!navigation.state.params || !navigation.state.params.workoutDays.lenth){
            alert('Você precisa selecionar pelo menos um dia!');
            return
        }
        navigation.navigate('StarterNível')
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
        name:state.useReducer.name,
        workoutDays:state.useReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setName:(name)=>dispatch({type:'SET_NAME', payload:{name}}),
        setWorkoutDays:(workoutDays) => dispatch({type:'SET_WORKOUTDAYS', payload:{workoutDays}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);