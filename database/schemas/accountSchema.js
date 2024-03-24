module.exports = (mongoose) => {
	const accountSchema = new mongoose.Schema({
		login: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		}
	});

	return mongoose.model('account', accountSchema);
};