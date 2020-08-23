const Renderer = function () {
  const renderPosts = function (posts){
    $("#posts").empty()

    const appendToElement = function (htmlToAppend, element) {
      return $(element).append(htmlToAppend)
    } 

    appendToElement('<br>', '#posts')

    for(p in posts){
      appendToElement(
        `
        <div class="post" id=${posts[p].id}>
          ${posts[p].text}
        `
      , '#posts')

      const comments = posts[p].comments

      for (c in comments){
        appendToElement(
          `
            <div class="comments" id=${comments[c].id}>
              <button class="delete-comment">
                X
              </button>
              ${comments[c].text}
            </div>
          `
        , `#${posts[p].id}`)
      }
      appendToElement('<br/>', `#${posts[p].id}`)
      appendToElement('<input type="text" placeholder="Got something to say?"><button id="comment-button">Comment</button>', `#${posts[p].id}`)
      appendToElement('<br/>', `#${posts[p].id}`)
      appendToElement('<button class="delete">Delete Post</button>', `#${posts[p].id}`)
    }
  }
  return { 
    renderPosts,
  }
}

