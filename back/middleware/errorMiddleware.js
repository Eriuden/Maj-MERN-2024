const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode
    let message = err.message

    if (err.name === "CastError" && err.kind === "ObjectId") {
        statusCode = 404
        message = "Ressource introuvable"
    }
    res.status(statusCode).json({
        message,
    })
}

export {notFound, errorHandler}