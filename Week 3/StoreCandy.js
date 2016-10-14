class StoreCandy {
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