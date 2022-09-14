'use strict';

class Collection {
    constructor(model){
        this.model = model
    }

    async get(id,belonging){
        try {
            if (id) {
                return await this.model.findOne({where:{id:id}});
            } else {
                return await this.model.findAll({include:belonging})
            }
        } catch (error) {
            console.error("something wrong can't get item(s)");
        }
    }

    async create(obj){
        try{
            return await this.model.create(obj);
        }
        catch(error){
            console.error("something wrong can't create item");
        }       
    }

    async update(id,obj){
        try{
            return await this.model.update(obj,{where:{id:id}});           
        }
        catch(error){
            console.error("something wrong can't update item");
        }       
    }

    async delete(id){
        try{
            return await this.model.destroy({where:{id:id}});
        }
        catch(error){
            console.error("something wrong can't delete item");
        }       
    }
}
module.exports = {Collection};