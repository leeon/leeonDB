/*
 *author leeon
 *2012 09 22
 */
function DB(type){
	//HA somgthing will hanppen here~~~

    var db;  //the connect obj

    if(type == "LOCALSTORAGE" || type == "localstorage"){
        db = window.localStorage;
    }else{
        db = window.localStorage; 
    }

    /*Type   :: LocalStorage
     *Public :: check if the client browser support localstorage
     *Return :: true if successful | false if fail 
     */
	this.checkSupport = function(){
		if(db){
			return true;
		}return false;
	}


	/*Type   :: LocalStorage
     *Public :: insert a new item into the localStorage
     *Return :: true if successful | false if fail 
     */
	this.set = function(key,value){
		if(db){
            db.setItem(key,value);
            return true;
        }return false;
	}


    /*Type   :: LocalStorage
     *Public :: get an item from the localStorage
     *Return :: if the value is null return default value
     */
    this.get = function(key,defValue){
        if(db){
            var result = db.getItem(key);
            if(result == null){
                return defValue;
            }return result;
        }
    }
};