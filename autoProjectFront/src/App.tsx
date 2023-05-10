import { FormEvent } from "react";
import { Form, IOnSubmitParams } from "./components/Form";
import axios from "axios";
import Swal from "sweetalert2";
function App() {
	async function onSubmit({event,formInputs} : IOnSubmitParams) {
		event.preventDefault();
		await axios.post("http://localhost:3000/reports/leads", {
			data: {
				...formInputs,
			}
		});

		Swal.fire("Success!", "Form submitted with success!", "success");
    
	}
	return (
		<>

			<h1 className="font-extrabold  text-center mt-6 text-3xl text-gray-700">Contact Us</h1>
			<div className=" w-full max-w-7xl mx-auto mt-5 bg-gray-300"> 
				<Form onSubmit={onSubmit}/> 
			</div>
		</>
	);
}

export { App };

