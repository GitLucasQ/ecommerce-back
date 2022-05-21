export const loginUser = (req, res) => {
    const { name } = req.body;    

    if (name === undefined) {
        res.redirect('/login');
    }
    else {
        req.session.name = name;

        res.redirect('/')
    }
}