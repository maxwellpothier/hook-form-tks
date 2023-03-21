import ControllerForm from "../components/controllerForm";
import OurForm from "../components/ourForm";
import SimpleForm from "../components/simpleForm";

export default function Home() {
	return (
		<>
			<div style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				gap: "30px",
				marginBottom: "30px",
			}}>
				{/* <SimpleForm/> */}
				{/* <ControllerForm/> */}
			</div>
			<OurForm/>
		</>
	);
};
