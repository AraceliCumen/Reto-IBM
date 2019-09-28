import Adition from '../models/Adition';

export async function saveAdition(req, res) {

    try {
        let numberone = parseInt(req.params.numberOne);
        let numbertwo = parseInt(req.params.numberTwo);
        let result = numberone + numbertwo;
        
        const newAdition = await Adition.create({
            numberone,
            numbertwo,
            result
        }, {
                fields: ['numberone', 'numbertwo', 'result']
            });
        res.json({ message: 'New Task created' });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something Goes Wrong. Try Again.',
            data: {},
        })
    }
    res.json('received');
};
