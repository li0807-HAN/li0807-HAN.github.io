var posts=["2026/06/18/git/","2025/11/18/hexo部署/","2025/04/06/markdown语法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };