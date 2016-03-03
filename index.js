module.exports.createMiddleware = createMiddleware;

function createMiddleware(server) {
    return function(req, res, next) {
        server.parse(req.body).then(function(response) {
            res.status(200).send(response);
        }).catch(next);
    };
};