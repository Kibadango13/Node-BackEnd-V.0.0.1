const Keywords = require('./keywordsModel');

async function search(){
        return await Keywords.find();
}

module.exports = {
       search 
};
