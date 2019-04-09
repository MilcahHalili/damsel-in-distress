const BASE_URL = '/api/posts/';

function index () {
    return fetch(BASE_URL).then(res => res.json());
}

function create (post) {
    const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'post': post})
    }
    return fetch(BASE_URL, options).then(res => res.json());
}

function deletePost (post_id){
    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'post_id': post_id})
    }
    return fetch(BASE_URL + 'delete', options).then(res => res.json())
}

function addComment (post_id, comment){
    const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({'post_id': post_id, 'comment': comment})
    }
    return fetch(BASE_URL + 'comment', options).then(res => res.json())
}

export default {
    index, 
    create, 
    deletePost,
    addComment
}