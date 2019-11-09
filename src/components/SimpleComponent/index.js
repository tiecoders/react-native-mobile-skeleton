import React from 'react';
import {Text} from "react-native-ui-kitten";
import {bindActionCreators, compose} from "redux";
import {simpleAction} from "../../actions/simpleActions";
import {connect} from "react-redux";

class SimpleComponent extends React.Component {
    componentDidMount() {
        const {
            enableIt
        } = this.props

        setTimeout(enableIt, 2000)
    }

    render() {
        const {
            enabled
        } = this.props

        return (
            <>
                {!enabled && <Text>Hello My Friends</Text>}
                {enabled && <Text>Hello My Best Friends</Text>}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    enabled: state.simple.enabled
})

const mapDispatchToProps = dispatch => ({
    enableIt: bindActionCreators(simpleAction, dispatch)
});

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
);

export default enhance(SimpleComponent)