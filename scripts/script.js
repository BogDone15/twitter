class FetchData {
 getResourse = async url => {
  const res = await fetch(url);

  if (!res.ok) {
   throw new Error('Произошда ошибка :' + res.status);
  }
  
  return res.json();
 }

 getPost = () => this.getResourse('db/database.json');
 
}

class Twitter {
 constructor({ listElem }) {
  const fetchData = new FetchData();
  this.tweets = new Posts();
  this.elements = {
   listElem: document.querySelector(listElem),
  }

  fetchData.getPost()
   .then(data => {
    data.forEach(this.tweets.addPost);
    
   });
   console.log('this.tweets: ', this.tweets);
 }

 renderPosts() {

 }

 showUserPost() {

 }

 showLikesPost() {

 }

 showAllPost() {

 }

 openModal() {

 }
}

class Posts {
 constructor({ posts = [] } = {}) {
  this.posts = posts;
 }

 addPost = (tweets) => {
  this.posts.push(tweets);
 }

 deletePost(id) {

 }

 likedPost(id) {

 }
}

class Post {
 constructor({ id, userName, nickName, postDate, text, img, likes = 0 }) {
  this.id = id || this.generateID();
  this.userName = userName;
  this.nickName = nickName;
  this.postDate = postDate;
  this.text = text;
  this.img = img;
  this.likes = likes;
  this.liked = false;
 }

 changeLike() {
  this.liked = !this.liked;
  if (this.liked) {
   this.likes++;
  } else {
   this.likes--;
  }
 }

 generateID() {
  return Math.random().toString(32).substring(2, 9) + (+new Date).toString(32);
 }

 getDate() {
  const options = {
   year: 'numeric',
   month: 'numeric',
   day: 'numeric',
   hour: '2-digit',
   minute: '2-digit',
  }
  return this.postDate.toLocaleString('ru-RU', options);
 }
}

const twitter = new Twitter({
 listElem: '.tweet-list'
});

