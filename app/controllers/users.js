exports.list = async (req, res) => {
	res.status(200).send([
		{
			id: 1,
			name: 'John',
			lastname: 'Doe',
			email: 'johndoe@ejemplo.com',
		},
		{
			id: 2,
			name: 'Jane',
			lastname: 'Doe',
			email: 'janedoe@ejemplo.com',
		},
		{
			id: 3,
			name: 'Juan',
			lastname: 'Perez',
			email: 'juanperez@ejemplo.com',
		},
	]);
	// res.status(400).send({
	// 	detail: 'Hubo un error al traer los usuarios',
	// });
};
