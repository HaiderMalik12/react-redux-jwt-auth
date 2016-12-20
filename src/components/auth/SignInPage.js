import React from 'react';
import {reduxForm,Field} from 'redux-form';


class SignInPage extends React.Component {

    constructor(props){

        super(props);

        this.handleFormSubmit= this.handleFormSubmit.bind(this);

    }

     handleFormSubmit({email,password}){


       console.log(email,password);

       //Submit Email/password to the server

         //if request is good

         //-Update state to indicate user is authenticated


         //-Save the JWT token

         // -redirect to the route '/feature'

         //if request is bad ...

         // Show an error to the user.


     }

    render() {

        const {handleSubmit}  = this.props;

         return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>

                {/*Email*/}
                <fieldset className="form-group">
                    <label> Email</label>
                    <Field  component ="input" type="email" className="form-control" name="email"/>
                </fieldset>
                {/*Password*/}
                <fieldset className="form-group">
                    <label>Password</label>
                    <Field name="password" component="input" type="password" className="form-control"/>
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>


        );

    }
}

export default reduxForm({

    form: 'signin'

})(SignInPage);