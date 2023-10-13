const CommunityStorage = require('./CommunityStorage');

class Community{
    constructor(body) {
        this.body = body;
    }

    async community(id){
        try {
            const posts = await CommunityStorage.getPosts(id);
            return posts;
        } catch (error) {
            console.log('err:',err);
        }
    }
}

module.exports = Community;