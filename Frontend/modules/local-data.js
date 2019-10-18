import { Ajax } from '../modules/ajax.js';
const baseUrl = "https://api-voting-system.herokuapp.com";

class LocalData {
    constructor() {
        this.xhrRequest = new Ajax(baseUrl);
    }

    /**
     * @function updateStorage updates the items stored with the new values
     * @param {Array} data array with the JSON from the web service 
     */
    updateLocalStorage(data) {
        for (var i = 0; i < data.length; i++) {
            if (!this.existStorageItem(data[i].id) || !this.needUpdateStorageItem(data[i].id, data[i])) {
                this.saveLocalStorageItem(data[i].id, data[i]);
            }
        }
    }

    /**
     * @function setKeyAgenda set into the key agenda's list to handle the ids into localstorage
     * @param {string} newKey the new key to be added
     * @returns {boolean} true if the key is new and can be added, false if it's already added
     */
    setNewKeyAgenda(newKey) {
        var list = JSON.parse(this.getLocalStorageItem("idList"));
        if (this.isAgendaRegistered(newKey)) return false;
        list.push(newKey);
        this.saveLocalStorageItem("idList", list);
        return true;
    }

    /**
     * @function isAgendaRegistered verify if a key for an agenda is already registered
     * @param {string} key the key to access the agenda
     * @returns {boolean} true if exists, false if not
     */
    isAgendaRegistered(key){
        var list = JSON.parse(this.getLocalStorageItem("idList"));
        for (var i = 0; i < list.length; i++) {
            if (list[i] == key) return false;
        }
        return true;
    }

    /**
     * @function clearLocalStorageList remove all items added
     */
    clearLocalStorageList() {
        localStorage.clear();
    }

    /**
     * @function setLocalStorageItem Save the new item to localstorage
     * @param {string} key the key to access to the localstorage value
     * @param {string} value the information about the agenda
     */
    saveLocalStorageItem(key, value) {
        this.setNewKeyAgenda(key);
        localStorage.setItem(key, JSON.stringify(value));;
    }

    /**
     * @function saveIntoServerItem saves the minute definitely to the database
     * @param {JSON} minute the minute to be added to the agenda
     */
    saveIntoServerItem(minute){
        this.xhrRequest.insertMinute(minute, (data)=>{
            console.log(data);
        })
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