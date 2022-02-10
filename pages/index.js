import react, { useState } from 'react';
import axios from 'axios';
export default function Home() {
	const [file, setFile] = useState('');

	const handleUpload = async (e) => {
		const body = new FormData();
		body.append("file", file);
		body.append("accessToken", 'accessToken');
		body.append("parentId", '01XA3PFKG7YWH2K7QVIZCYRP33XLQEHLZG');
		const res = await axios.put(`/api/file`, body);
		console.log(res.data);
	};
	return (
		<div>
			<input type="file" onChange={(e) => setFile(e.target.files[0])} />
			<button onClick={(e) => handleUpload(e)}>upload</button>
		</div>
	);
}
