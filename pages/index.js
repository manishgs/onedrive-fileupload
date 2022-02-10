import react, { useState } from 'react';
import axios from 'axios';
export default function Home() {
	const [file, setFile] = useState('');

	const handleUpload = async (e) => {
		const res = await axios.put(`/api/file`, {
			accessToken: token,
			filename: file.name,
			fileType: file.type,
			content: file,
			parentId: '01XA3PFKG7YWH2K7QVIZCYRP33XLQEHLZG',
		});
		console.log(res.data);
	};
	return (
		<div>
			<input type="file" onChange={(e) => setFile(e.target.files[0])} />
			<button onClick={(e) => handleUpload(e)}>upload</button>
		</div>
	);
}
