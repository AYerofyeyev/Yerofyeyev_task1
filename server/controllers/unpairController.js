const Unpair = require('../models/unpair');

exports.index = function (req, res) {
    let elements = {};
    req.body.data.map((element, index) => {
        if(elements[element]) {
            elements[element].count++;
            elements[element].index = index;
        } else {
            elements[element] = {
                value: element,
                count: 1,
                index: index
            };
        }
    });
    let arr = [];
    for (let element in elements) {
        if (elements[element].count & 1) {
            arr = [elements[element], ...arr];
        }
    }
    if (arr[0]) {
        arr.sort((a, b) => (a.index > b.index) ? 1 : -1);
        const unpair = new Unpair({
            userId: req.body.userId,
            value: arr[0].value,
            count: arr[0].count,
            date: new Date().toISOString()
        });
        return unpair.save()
            .then(result => {
                res.json({data: result._doc.value});
            });
    }
    return res.json({data: null});
};

exports.statistics = function (req, res) {
    Unpair.find({userId: req.params.userId})
        .then(unpairs => {
            return unpairs.map(unpair => {
                return {
                    value: unpair.value,
                    count: unpair.count
                };
            });
        })
        .then(result => res.json({data: result}));
};