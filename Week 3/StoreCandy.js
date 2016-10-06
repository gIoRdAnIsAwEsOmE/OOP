class StoreCandy {
    constructor() {
        this.store_ids = [];
		this.getBounds = (classobject) => {
			let scquery = new CB.CloudQuery("StoreCandy");
			if(classobject.constructor.name == "Store"){
				console.log("Store");
				scquery.equalsTo(classobject.id);
				scquery.find({
					success : (res) => {
						console.log(res);
					}	
				});
			}else if (classobject.constructor.name == "Candy"){
				console.log("Currently we cannot find where this candy came from, we are sorry :(");
			}
		};
		this.setBounds = (storeid, candyid) => {
			this.cloudobject.set("store_id", storeid);
			this.cloudobject.set("candy_id", candyid);
			this.cloudobject.save({});
		};
    }
    static get cloudobject(){
        let sc = new CB.CloudObject("StoreCandy");
        return sc;
		}
	} 