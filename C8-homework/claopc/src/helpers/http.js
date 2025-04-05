export const serverError = (message, res) => {
    console.error(message);
    res.status(500).json({msg: 'Internal Server Error'})
}