let candy = new CB.CloudObject("Candy");

class Candy {
    constructor(params){
        this._id = params.id;
        this._name = params.name;
        this._cost = params.cost;
        this._expiration = params.expiration;
        
    }
    static get cloudobject (){
        return candy;
    }
    
}