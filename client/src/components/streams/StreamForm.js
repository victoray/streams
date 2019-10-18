import React from 'react';
import {Field, reduxForm} from "redux-form";

class StreamForm extends React.Component {

    renderInput = ({input, label, meta}) => {
        const cName = `${(meta.error && meta.touched) ? 'error' : ''} field`;
        return (
            <div className={cName}>
                <label>{label}</label>
                <input {...input} type="text" autoComplete={"off"}/>
                <div className={"ui error message"}>{(meta.touched) ? meta.error : ''}</div>
            </div>);
    };

    render() {
        return (
            <div className={"ui grid container"} style={{marginTop: '10px'}}>
                <div className={"eight wide column"}>
                    <div className={"ui raised inverted segment"}>
                        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}
                              className={"ui big inverted form error"}>
                            <Field name={"title"} component={this.renderInput} label={"Title"}/>
                            <Field name={"description"} component={this.renderInput} label={"Description"}/>
                            <button className={"ui button red"}> Submit</button>
                        </form>
                    </div>
                </div>
            </div>)
    }

}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a title"
    }

    if (!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);