const Tweeter  = function () {
  const posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        { id: "c4", text: "Don't wory second poster, you'll be first one day." },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ]
    }
  ]

  let postIdCounter = posts.length
  let commentIdCounter = 0

  for (let post in posts) {
    commentIdCounter += posts[post].comments.length;
  }


  const getPosts = function () {
    return posts
  }

  const addPost = function (text) {
    let id

    if (posts.length < 1) {
      id = 'p1'
    } else {
      const lastPostId = `p${(posts[posts.length - 1].id)}`;

      id = `p${+lastPostId.substr(-1) + 1}`
    }

    const post = {
      comments: [],
      text: text,
      id: id,
    }

    posts.push(post);
  }

  const removePost = function (postID) {
    for (p of posts) {
      if (p.id == postID) {
        posts.splice(posts.indexOf(p), 1)
      }
    }
  }

  const addComment = function (postID, text) {
    for (let i in posts) {
      if (posts[i].id === postID) {
        const comments = posts[i].comments

        const lastCommantId = `p${(comments[comments.length - 1].id)}`

        const id = +lastCommantId.substr(-1) + 1

        posts[i].comments.push({ id: "c" + id, text: text });
      }
    }
  }

  const removeComment = function (postID, commentId) {
    for (let i in posts) {
      if (posts[i].id == postID)
        for (let p in posts[i].comments)
          if (posts[i].comments[p].id == commentId) {
            posts[i].comments.splice(p, 1)
          }
    }
  }

  return {
    getPosts,
    addComment,
    removeComment,
    addPost,
    removePost,
  }  
}