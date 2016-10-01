class StoreCandy {
    constructor(params) {
        params.storeid = storeid;
        params.candyid = candyid;
    }
    static get cloudobject(){
        let sc = new CB.CloudObject("StoreCandy");
        return sc;
    }
} 