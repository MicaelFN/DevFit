import React from 'react';
import styled from 'styled-components/native'
import {Text} from 'react-native'
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
    margin-left:30px;
    margin-right:30px;
`;
const WelcomeText = styled.Text`
    fontSize:22px;
    color:#222;
    margin-top:50px;
`;
const WelcomeImage = styled.View`
    flex:1;
    justify-content:center;
`;
const WelcomeLogo = styled.Image`
    width:300px;
    height:300px;
    
`;
const ButtonText = styled.Text`
    color:#FFF;
`;

const BeginConfigArea = styled.View`
    margin-bottom:50px;
    width:100%;
`;

const Page = (props) => {

    const start = () => {
        props.navigation.navigate('StarterName');
    }

    return(
        
        <Container>
           <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
           <WelcomeImage>
                <WelcomeLogo source={require('../assets/boneco.png')}/>
           </WelcomeImage>
           <BeginConfigArea>
                <DefaultButton 
                    width="100%" 
                    bgcolor='#0072C0'
                    onPress={start}
                    underlayColor='#0B7AC6'
                >
                    <ButtonText>Configurações</ButtonText>
                </DefaultButton>
           </BeginConfigArea>
        </Container>
    );
}

Page.navigationOptions = {
    header:null
}

export default Page;