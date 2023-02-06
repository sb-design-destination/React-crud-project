import React from 'react';
import { useState } from 'react';

const Customhook = (inpval, inperror) => {
    const [inp, DataInp] = useState(inpval)
    const [inpe, DataInperror] = useState(inperror)

    const handleChangeinput = (b) => {
        DataInp(() => ({ ...inp, [b.target.name]: b.target.value }))
        // console.log("called", inp);
        if (b.target.name == "username") {
            if (b.target.value == "") {
                DataInperror({ ...inpe, "usernameerror": "this field is reuired" })
            } else {
                DataInperror({ ...inpe, "usernameerror": "" })
                
            }

        } else {
            if (b.target.name == "password") {
                if (b.target.value == "") {
                    DataInperror({ ...inpe, "passworderror": "this field is reuired" })
                } else {
                    DataInperror({ ...inpe, "passworderror": "" })
                    
                }
    
            }

        }
    }
    // return (
    //     <>

    //     </>
    // );
    return {
        handleChangeinput,
        inp,
        inpe
    }
};

export default Customhook;