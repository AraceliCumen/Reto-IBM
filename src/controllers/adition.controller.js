import Adition from '../models/Adition';

export async function saveAdition(req, res) {
    console.log('req:' + req.params);

    try {
        const numberOne = parseInt(req.params.numberOne);
        const numberTwo = parseInt(req.params.numberTwo);
        const result = numberOne + numberTwo;
        const newAdition = await Adition.create({
            numberOne,
            numberTwo,
            result
        }, {
                fields: ['numberone', 'numbertwo', 'result']
        });
        console.log('b1: ' + newAdition.numberOne);
        if (newAdition) {
            return res.json({
                message: 'New Adition created',
                data: newAdition
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something Goes Wrong. Try Again.',
            data: {},
        })
    }
    res.json('received');
};
