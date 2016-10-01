let store = new CB.CloudObject("Store");

class Store {
    constructor(params){
        this._id = params.id;
        this._name = params.name;
        this._place = params.place;
        this._status = params.status;
    }
    static get cloudobject (){
        return store;
    }
}