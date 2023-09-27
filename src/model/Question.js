const QuestionStorage = require('./QuestionStorage');

class Question {
    constructor(body) {
        this.body = body;
    }

    async genre() {
        const client = this.body;
        let maxGenre = '';
        let maxCount = -1;
        const list = {
            fighter: 0,
            warrior: 0,
            brain: 0,
            explorer: 0,
            gamer: 0
        }
        if(client.first === 'true'){
            list.fighter += 5;
            list.warrior += 5;
            list.brain += 5;
        } else{
            list.explorer += 5;
            list.gamer += 5;
        }
        if (client.second === 'true') {
            list.fighter += 1;
            list.brain += 1;
        } else{
            list.warrior += 1;
            list.explorer += 1;
            list.gamer += 1;
        }
        if (client.third === 'true') {
            list.brain += 4;
            list.gamer += 2;
        } else{
            list.explorer += 2;
            list.warrior += 4;
            list.fighter += 4;
        }
        if (client.fourth === 'true') {
            list.gamer += 1;
        } else{
            list.explorer += 1;
            list.warrior += 1;
            list.fighter += 1;
            list.brain += 1;
        }
        if (client.fifth === 'true') {
            list.explorer += 3;
            list.gamer += 1;
            list.warrior += 1;
        } else{
            list.fighter += 1;
            list.brain += 1;
        }
        if (client.sixth === 'true') {
            list.explorer += 1;
            list.gamer += 1;
        } else {
            list.warrior += 1;
            list.brain += 1;
            list.fighter += 1;
        }
        console.log(list)

        for (const genre in list) {
            if (list[genre] > maxCount) {
                maxCount = list[genre];
                maxGenre = genre;
            }
        }

        return maxGenre;
    }

    async result(id) {
        const result = await QuestionStorage.getItemsInfoID(id);
        return result
    }
}

module.exports = Question