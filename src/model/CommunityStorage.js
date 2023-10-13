const fs = require('fs').promises;

class CommunityStorage {
    static #getPosts(data, id){
        const posts = JSON.parse(data);
        // const postID = id
        // console.log(posts[id][1]);
        console.log(posts[id]);
        return posts[id];
    }

    static async getPosts(id){
        return fs
        .readFile('./src/databases/post.json')
        .then((data)=>{
            return this.#getPosts(data, id);
        })
    }
}
module.exports = CommunityStorage;