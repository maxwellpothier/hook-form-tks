import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

export default function OurForm() {
	const {register, handleSubmit, control, formState: {errors}} = useForm({
		defaultValues: {
			firstName: "",
		},
		mode: "onBlur"
	});
	
	useEffect(() => {
		console.log(errors);
	}, [errors]);

	const onSubmit = (data) => {
		console.log(data);
	};

    return (
		<div style={{border: "2px solid yellow", padding: "20px"}}>
            <p>OUR FORM</p><hr/>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name={"firstName"}
					control={control}
					rules={{required: true}}
					render={({field: {value, onChange}}) => {
						return (
							<div>
								<label>First name: </label>
								<input value={value} type={"text"} onChange={onChange}/>
							</div>
						);
					}}
				/>
				{errors.firstName && <div>First Name Required</div>}
				<button type={"submit"}>Submit</button>
			</form>

		</div>
    );
}
