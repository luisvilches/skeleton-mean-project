exports.index = (req,res,next) => {
	res.sendfile('./app/index.html');
}

