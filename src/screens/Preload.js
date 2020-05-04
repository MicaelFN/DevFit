import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from  'react-redux';


const Preload = (props) => {
    props.navigation.dispatch(StackActions.reset({
        index:0,
        actions:[
            NavigationActions.navigate({routeName:'StarterStack'})
        ]
    }));

    /* if(!props.name){
        //mandar para StarterStack
        props.Navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'StarterStack'})
            ]
        }));
    }else{
        //mandar para apptab
        props.Navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'AppTab'})
            ]
        }));
    } */

    return null;
}

const mapStateToProps = (state) => {
    return {
        name:state.useReducer.name
    };
}

export default connect(mapStateToProps)(Preload);