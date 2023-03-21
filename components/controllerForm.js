import { TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

export default function ControllerForm() {
    const hookForm = useForm();

    useEffect(() => {
        console.log("Values", hookForm.getValues("firstName"));
    }, [hookForm.watch("firstName")]);

	const onSubmit = (data) => {
		console.log(data);
	};

    const blueButtonClick = () => {
        hookForm.setValue("color", "blue");
    }

    return (
		<div style={{border: "2px solid green", padding: "20px"}}>
            <p>FANCY FORM</p><hr/>
			<form onSubmit={hookForm.handleSubmit(onSubmit)}>
                <Controller
                    name={"firstName"}
                    rules={{required: false}}
                    control={hookForm.control}
                    render={({field: {value, onChange}}) => {
                        return (
                            <>
                                <TextField
                                    value={value ?? ""}
                                    label={"First name"}
                                    size={"small"}
                                    onChange={onChange}
                                />
                            </>
                        );
                    }}
                />
                <Controller
                    name={"color"}
                    rules={{required: false}}
                    control={hookForm.control}
                    render={({field: {value, onChange}}) => {
                        return (
                            <>
                                <TextField
                                    value={value ?? ""}
                                    label={"Fav Color"}
                                    size={"small"}
                                    onChange={onChange}
                                />
                            </>
                        );
                    }}
                />
				<button type={"submit"}>Submit</button>
                <button onClick={() => blueButtonClick()}>My Fav color is Blue</button>
                <button onClick={() => hookForm.reset()}>Reset Values</button>
			</form>
		</div>
    );
}
