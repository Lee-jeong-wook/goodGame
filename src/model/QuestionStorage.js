const fs = require('fs').promises;

class QuestionStorage {
    static #getItemInfoID(data, id){
        const items = JSON.parse(data);
        const idx = items.id.indexOf(id);
        const itemKey = Object.keys(items);
        const itemInfo = itemKey.reduce((newItem, info) => {
            newItem[info] = items[info][idx];
            if (info === 'related') {
                const relatedInfo = items[info][id].map((relatedItem) => {
                    const relatedKeys = Object.keys(relatedItem);
                    const relatedData = {};
                    relatedKeys.forEach((key) => {
                        relatedData[key] = relatedItem[key];
                    });
                    return relatedData;
                });
                newItem[info] = relatedInfo;
            }
            return newItem;
        }, {});
        return itemInfo;
    }

    static getItemsInfoID(ID) {
        return fs
        .readFile('./src/databases/question.json')
        .then((data)=>{
            return this.#getItemInfoID(data, ID);
        })
        .catch((err)=>{
            console.log(`${err}`)
        });
    }
}

module.exports = QuestionStorage