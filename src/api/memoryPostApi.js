import delay from 'mockApi/delay';

const posts = [
  {
    id: 1,
    Author: "Rubrik",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    Image: null,
    Date: "02-09-1989",
    Location: "Stockholm"
  },
  {
    id: 2,
    Author: "Rubrik",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    Image: null,
    Date: "02-09-1989",
    Location: "Stockholm"
  },
  {
    id: 3,
    Author: "Rubrik",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    Image: null,
    Date: "02-09-1989",
    Location: "Stockholm"
  },
  {
    id: 4,
    Author: "Rubrik",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    Image: null,
    Date: "02-09-1989",
    Location: "Stockholm"
  },
  {
    id: 5,
    Author: "Rubrik",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    Image: null,
    Date: "02-09-1989",
    Location: "Stockholm"
  },
  {
    id: 6,
    Author: "Rubrik",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    Image: null,
    Date: "02-09-1989",
    Location: "Stockholm"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (post) => {
  return replaceAll(post.Author, ' ', '-');
};


class PostApi {

  //Get all posts
  static getAllPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }
  //Save post
  static savePost(post) {
    post = Object.assign({}, post); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPostTextLength = 1;
        if (post.Text.length < minPostTextLength) {
          reject(`Text must be at least ${minPostTextLength} characters.`);
        }
        if (post.id) {
          const existingPostIndex = posts.findIndex(a => a.id == post.id);
          posts.splice(existingPostIndex, 1, post);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new posts in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          post.id = generateId(post);
          posts.push(post);
        }
        resolve(post);
      }, delay);
    });
  }
}

export default PostApi;
