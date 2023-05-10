import { FormEvent, useEffect, useState } from "react";

type Plans = "Basic" | "Standard" | "Professional"
interface IFormInputs {
  name?: string;
  phone?: string;
  email?: string;
  plan?: Plans
}

export interface IOnSubmitParams {
  event: FormEvent<HTMLFormElement>,
  formInputs: IFormInputs

}
interface IFormProps {
  onSubmit: (data : IOnSubmitParams) => void
}
export function Form({onSubmit} : IFormProps) {

	const [formInputs,setFormInputs] = useState<IFormInputs>({
		plan: "Basic"
	});
	const textInputs = [
		{
			input: "name",
			placeholder: "Type your full name",
			required: true,
			type: "text"
		},
		{
			input: "email",
			placeholder: "Type your e-mail",
			required: true,
			type: "email"
		},
		{
			input: "phone",
			placeholder: "Type your phone",
			required: false,
			type: "text"
		},
	];
	const selectPlans = ["Basic", "Standard", "Professional"];
	return (
		<div className="w-full ">

			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit  ={(event) => {onSubmit({event, formInputs});}}>
				{textInputs.map(({input, placeholder, required, type}) => {
					return (
						<div className="mb-4" key={input}>
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={input}>
								{input.charAt(0).toUpperCase() + input.slice(1)}  {required && <span className="font-bold text-red-400">*</span>}
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required={true} type={type} name={input} id={input} placeholder={`${placeholder} ${!required && "(Optional)"}`} onChange={({target}) => {
								setFormInputs({
									...formInputs,
									[target.name] : target.value
								});}} 
							/>
						</div>
					);
				})}
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plan">Select your interested plan <span className="font-bold text-red-400">*</span></label>
					<select name="plan" id="plan" onChange={({target}) => {
						setFormInputs({
							...formInputs,
							[target.name] : target.value
						});}} >
						{selectPlans.map((plan,index) => index === 1 ? <option  defaultValue={plan} value={plan}  key = {plan}>{plan}</option> : <option value={plan} key = {plan}>{plan}</option>)}
					</select>
				</div>
				

				<button className="bg-[#7066e0] hover:bg-[#574ae8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Send
				</button>
			</form>
		</div>
	);
}
