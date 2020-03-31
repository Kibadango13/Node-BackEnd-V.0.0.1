const keywords = require('./keywordsModel');
const Service = require('./keywordsService');

const search = async (req,res)=>{
    /*keywords.find()
    .then(keywords=> res.send(keywords))
    .catch(err=> res.status(500).send(err));
    */

        try {
            const response = await Service.search();
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }

    };


const create = async (req,res)=>{
        const obj = req.body;
        try {
            const response = await keywords.create(obj);
            res.status(201).send(response);
        } catch (error) {
            res.status(500).send(error);
        }
 
    };

const readById = async (req,res)=>{
        const id = req.params.id;
        try {
            const response = await keywords.findById(id);
            res.send(response);
        } catch (error) {
            res.status(404).send(`${id} not found`);
        }
    
        
    };
const update = async(req,res)=>{
        const idp = req.params.id;
        const objb = req.body;
        //const obj = keywords.find(obj => obj.id === idp);
        
        try {
            const response = await keywords.findByIdAndUpdate(idp,objb);
            res.status(204).send(response);
        } catch (error) {
            res.status(404).send(`${idp} not found`);
        }

    };
const remove = async (req,res)=>{
        const idp = req.params.id;
        try {
            const response = await keywords.findByIdAndDelete(idp);
            res.send(204).send(response);
        } catch (error) {
            res.status(404).send(`${idp} not found`);
        }
    
      
    };



module.exports = {
    search,
    create,
    readById,
    update,
    remove
}