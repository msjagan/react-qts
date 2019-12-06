import React, {useState} from 'react';

const FormPage = (props) => {
	const [username, setUsername] = useState('');
	const handleSubmit = async (event) => {
		var data = {
			username: event.target.username.value
		}
		event.preventDefault();
		const result = await fetch('/mysql/user/new', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
		}).then((response) => {
			if (response.status >= 400)  {
				throw new Error("Error");
			}
			return response.json();
		}).then((data) => {
			setUsername(data.username)
		});
	};
  return (
	<div className="container">
		<form onSubmit={(event) => handleSubmit(event)}>
			<div className="form-group col-md-6">
				<input required name="username" className="form-control" placeholder="Name" type="text" />
			</div>
			<div className="form-group col-md-6">
				<input required name="password" className="form-control" placeholder="Password" type="text" />
			</div>
			<div className="form-group col-md-12 col-sm-12 col-xs-12">
				<button className="btn-success" type="submit">Get Appointment</button>
			</div>
		</form>
		{username}
	</div>
  );
}

export default FormPage;