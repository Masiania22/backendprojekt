const Przepis = require("../models/przepis");
exports.przepisy_get_all = (req, res, next) => {
    Przepis.find()
    .then(result => {

        res.status(200).json({ wiadomosc: 'Wszystkie przepisy',
        info: result,
     });
    })
    .catch(err => res.status(500).json(err));
};

exports.przepisy_add_new = (req, res, next) => {
    const przepis = new Przepis({
        danie: req.body.danie,
        skladniki: req.body.skladniki,
        kalorycznosc: req.body.kalorycznosc,
    });
    przepis.save()
        .then(result => {
            res.status(201).json({
                wiadomosc: 'Dodanie nowego przepisu',
                info: result,
              });
        })
        .catch(err => res.status(500).json(err));
};

exports.przepisy_get_byid = (req, res, next) => {
    const id = req.params.przepisId;
    Przepis.findById(id)
    .then(result => {
        res.status(200).json({ wiadomosc: 'Przepis o numerze ID ' + id,
        info: result,
    });
    })
    .catch(err => res.status(500).json(err));
  };

exports.przepisy_zmien = (req, res, next) => {
    const id = req.params.przepisId;
    Przepis.findByIdAndUpdate(id, {danie: req.body.danie, skladniki: req.body.skladniki, kalorycznosc: req.body.kalorycznosc,})
    .then(() => {
        res.status(200).json({ wiadomosc: 'Zmiana danych przepisu o numerze ' + id });
    })
    .catch(err => res.status(500).json(err));
  };

exports.przepisy_delete = (req, res, next) => {
    const id = req.params.przepisId;
    Przepis.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ wiadomosc: 'Usunięto przepis o numerze ' + id });
    })
    .catch((err) => res.status(500).json(err));
};