class LocalData {
    constructor() {}

    /**
     * @function updateStorage updates the items stored with the new values
     * @param {Array} data array with the JSON from the web service 
     */
    updateLocalStorage(data) {
        for (var i = 0; i < data.length; i++) {
            if (!this.existStorageItem(data[i].id) || !this.needUpdateStorageItem(data[i].id, data[i])) {
                this.setLocalStorageItem(data[i].id, data[i]);
            }
        }
    }

    setKeyAgenda(newKey){
        var list = JSON.parse(this.getLocalStorageItem("idList"));
        list.push(newKey);
        this.setLocalStorageItem("idList", list);
    }

    /**
     * @function clearLocalStorageList remove all items added
     */
    clearLocalStorageList() {
        localStorage.clear();
    }
    
    /**
     * @function setLocalStorageItem Save the new item to localstorage
     * @param {*} key the key to access to the localstorage value
     * @param {*} value the information about the agenda
     */
    setLocalStorageItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * @function getLocalStorageItem obtains the value from a key
     * @param {string} key the key to access to the localstorage value
     * @returns {string} the value stored
     */
    getLocalStorageItem(key) {
        return localStorage.getItem(key);
    }

    /**
     * @function existStorageItem Returns true if the item already exists
     * @param {string} key the key to access to the localstorage value
     * @returns {boolean} true if the value exist, false if doesn't
     */
    existStorageItem(key) {
        return localStorage.getItem(key) != undefined;
    }

    /**
     * @function needUpdateStorageItem Returns true if the items are different
     * @param {string} key the key to access to the localstorage value
     * @param {JSON} value the value which could be modified
     * @returns {boolean} true if the value is different, false if are the same
     */
    needUpdateStorageItem(key, value) {
        let current = localStorage.getItem(key);
        return JSON.stringify(value) != current; //buscar mejor forma
    }
}

export { LocalData };