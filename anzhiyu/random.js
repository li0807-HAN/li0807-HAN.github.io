var posts=["posts/59282","posts/7571","posts/23825","posts/5685"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };