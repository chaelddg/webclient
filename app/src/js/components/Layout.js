import React from "react"
import { connect } from "react-redux";

import { sendFormData } from "../actions/form";

@connect((store) => {
    return {
        form_data: null
    }
})
export default class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('@@ componentWillReceiveProps ', nextProps);
    }

    handleSendFormData() {
        this.props.dispatch(sendFormData());
    }

    render() {
        return (
            <div className="container">
                <h1>Hello</h1>
                <button className="btn btn-default"
                        onClick={this.handleSendFormData.bind(this)}>Send Event</button>
            </div>
        )
    }

}
