import qs from "qs"

const local = {
    /**
     * 
     * @param { string } key 
     * @param { object } obj 
     */
    setLocal(key,obj){
        /**
         * stringify:{name:'iwen'} -> name=iwen&
         * parse:name=iwen -> {name:"iwen"}
         */
        localStorage.setItem(key,qs.stringify(obj));
    },
    getLocal(key){
        const result = localStorage.getItem(key);
        return qs.parse(result);
    },
    removeLocal(key){
        localStorage.removeItem(key)
    }
}

export default local