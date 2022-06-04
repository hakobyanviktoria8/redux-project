import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleMessage} from "../action/action";

const Toggle = ({messageVisibility, toggleMessage}) => {
    return (
        <div>
            {console.log(messageVisibility)}
            {messageVisibility &&
            <p>Hello world</p>
            }
            <button onClick={toggleMessage}>Toggle me
            </button>
        </div>
    )
};

const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleMessage,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Toggle)