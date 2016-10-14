let candy = new CB.CloudObject("Candy");

class Candy {
    constructor(name, id, cost, expiration, bool){
        this._id = id;
        this._name = name;
        this._cost = cost;
        this._expiration = expiration;
		if(bool){
			store.set("name", name);
			store.set("candy_id", id);
			store.set("cost", cost);
			store.set("expiration", expiration);
			store.save({
				success : (obj) => {
					console.log(obj);
				}	
			});
		}
    }
    static get cloudobject (){
        return candy;
    }
    
}