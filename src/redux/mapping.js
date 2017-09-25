import {connect} from 'react-redux';
import {Animation} from '../animation/Animation';

function mapStateToProps(state){
    return {text: state.text};
}

export const AnimationMapping = connect(mapStateToProps)(Animation);