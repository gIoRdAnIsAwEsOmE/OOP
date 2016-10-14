class StoreCandy {
<<<<<<< HEAD
    constructor(finderid, candyid, storeid) {
        this._finderid = finderid;
        this._candyid = candyid;
        this._storeid = storeid;
		this.getBounds = (classname, html /*jquery identity*/) => {;
			let scquery = new CB.CloudQuery("StoreCandy");
            scquery.equalTo(classname.toLowerCase() + '_id', this._finderid);
            scquery.find({
                success : (res) => {
                    for(let r of res){
                        let candy_id = r.document.candy_id;
                        let newquery = new CB.CloudQuery("Candy");
                        newquery.equalTo('candy_id', candy_id);
                        newquery.find({
                            success : (data) => {
                                for(let d of data){
                                    let output = $(html);
                                    d = d.document;
                                    let name = d.name;
                                    let expiration = d.expiration;
                                    let cost = d.cost;
                                    let id = d.candy_id;
                                    output.html(output.html() + `<tr><td>${name}</td><td>${cost}</td><td>${expiration}</td><td>${id}</td></tr>`);
                                }
                            }
                        });
                    }
                }
            });
        };
=======
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
>>>>>>> 2b78be659ea032cc0f588caea881e59d90908a3e
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
<<<<<<< HEAD
	}
=======
	} 
>>>>>>> 2b78be659ea032cc0f588caea881e59d90908a3e
