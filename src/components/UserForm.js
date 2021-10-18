import React, { useState } from 'react';
import Confirm from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from "./FormUserDetails";
function UserForm() {
    const [step, setStep] = useState(1);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");
    const [bio, setBio] = useState("");
    const [city, setCity] = useState("");
    const values = { firstName, lastName, email, occupation, bio, city };

    //Next step
    const nextstep = () => {
        setStep(step + 1);
    }

    //Previos step
    const prevstep = () => {
        setStep(step - 1);
    }

    const Switch = () => {
        switch (step) {
            case 1:
                return <FormUserDetails
                    nextstep={nextstep}
                    values={values}
                    setfirstName={setfirstName}
                    setlastName={setlastName}
                    setEmail={setEmail}
                />
            case 2:
                return <FormPersonalDetails
                    nextstep={nextstep}
                    prevstep={prevstep}
                    values={values}
                    setOccupation={setOccupation}
                    setCity={setCity}
                    setBio={setBio}
                />
            case 3:
                return <Confirm
                nextstep={nextstep}
                prevstep={prevstep}
                values={values}
                />
            default:
                return;
        }
    }

    return (
        <div>
            {Switch()}
        </div>

    )

}

export default UserForm
