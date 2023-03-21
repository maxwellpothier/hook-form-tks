import { useForm } from "react-hook-form";

export default function SimpleForm() {
	const {register, handleSubmit} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};


    return (
		<div style={{border: "2px solid blue", padding: "20px"}}>
            <p>SIMPLE FORM</p><hr/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>First name: </label>
					<input type={"text"} {...register("firstName", {required: false})}/>
				</div>
				<div>
					<label>Last name: </label>
					<input type={"text"} {...register("lastName")}/>
				</div>
				<div>
					<label>Favorite color: </label>
					<input type={"text"} {...register("color")}/>
				</div>
				<button type={"submit"}>Submit</button>
			</form>
		</div>
    );
}
