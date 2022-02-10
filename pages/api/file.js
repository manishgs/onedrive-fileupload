const axios = require('axios');

const handler = (req, res) => {
	const { method } = req;
	switch (method) {
		case 'PUT':
			upload(req, res);
			break;
		default:
			return res.status(405).send(`Method ${method} not allowed`);
	}
};

const upload = async (req, res) => {
	const { filename, accessToken, content, parentId, fileType } = req.body;
	const url = `https://graph.microsoft.com/v1.0/users/69e5bc0d-ef63-4040-88cf-0ada867b7afa/drive/items/${parentId}:/${filename}:/content`;
	try {
		const result = await axios({
			method: 'put',
			url: url,
			data: content,
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': fileType,
			},
		});
		res.status(200).send(result.data);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
};

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '4mb', // Set desired value here
		},
	},
};

export default handler;
