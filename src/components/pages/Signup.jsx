import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../../styles/signup.module.css";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import signupImage from "../../assets/signup.svg"

export default function Signup(){
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={signupImage}/>
                <Form className={`${classes.signup}`}>
                    <TextInput type="text" placeholder="Enter name" icon="person"/>
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email"/>
                    <TextInput type="password" placeholder="Enter password" icon="lock"/>
                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock"/>
                    <Checkbox   text="I agree to the Terms &amp; Conditions" />
                    <Button>Submit Now</Button>
                    <div className="info">
                        Already have an account?
                        <a href="#">Login</a>{" "}instead.
                    </div>

                </Form>
            </div>
        </>
    );
}