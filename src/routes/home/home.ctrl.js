const Question = require('../../model/Question');

const output = {
    genre: (req, res) => {
        res.render('home/genre.ejs')
    },
    result: async (req, res) => {
        try {
            const productId = req.query.id;
            console.log(productId);
            const result = new Question(req.body);
            const results = await result.result(productId);
            console.log(results.id);
            res.render('home/result', {results});
        } catch (err) {
            console.error('error:', err);
            return res.status(500).json({ error: 'Failed' });
        }
    }
}

const process = {
    genre: async (req, res) =>{
        console.log(req.body)
        const question = new Question(req.body);
        const resData = await question.genre();
        console.log(resData);
        return res.json({id : resData});
    }
}

module.exports= {
    output,
    process
};