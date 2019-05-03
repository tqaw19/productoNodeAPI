//productoController
let model = require('../models/productoModel');

module.exports = {
    show: function(req, res) {
        model.find({}, function(err,items) {
            if(!err){
                res.send(items);
            }else {
                console.log(err);
            }
        });
    },
    detail: function (req, res){
        let val_id = req.params.id;
        model.findOne({_id: val_id}, function(err, data){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else{
                res.send(data);
            }
        });
    },
    create: function(req, res){
        let obj = new model;
        obj.nombre = req.body.nombre;
        obj.descripcion = req.body.desc;
        obj.precio = req.body.precio;
        obj.categoria_id = req.body.categoria_id;
        obj.save(function (err, newData){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else {
                res.send(newData);
            }
        });
    },
    update: function (req ,res){
        let val_id = req.body.id;
        let datos = {
            nombre: req.body.nombre,
            descripcion: req.body.desc,
            precio: req.body.precio,
            categoria_id: req.body.categoria_id
        };
        model.updateOne({_id: val_id}, datos, function(err, newData){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else {
                res.send(newData);
            }
        });
    },
    delete: function (req ,res){
        let val_id = req.body.id;
        let datos = {
            nombre: req.body.nombre,
            descripcion: req.body.desc,
            precio: req.body.precio,
            categoria_id: req.body.categoria_id
        };
        model.deleteOne({_id: val_id}, datos, function(err ,newData){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else {
                res.send({status: true});
            }
        });
    }
}
