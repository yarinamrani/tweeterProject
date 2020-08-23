const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


$('#post').on('click', function () {
  const input = $('#input')
  tweeter.addPost(input.val())
  renderer.renderPosts(tweeter.getPosts())
  input.val(' ')
})


$('#posts').on('click', '.delete',  function () {
  const postId = $(this).closest('.post').attr('id')
  console.log(postId)
  tweeter.removePost(postId)
  console.log(tweeter.getPosts())
  renderer.renderPosts(tweeter.getPosts())
})



$('#posts').on('click', '.delete-comment',  function () {
  const postId = $(this).closest('.post').attr('id')
  const commmentId = $(this).closest('.comments').attr('id')
  console.log(postId, commmentId)
  tweeter.removeComment(postId, commmentId)
  console.log(tweeter.getPosts())
  renderer.renderPosts(tweeter.getPosts())
})


$('#posts').on('click', '.delete-comment',  function () {
  const postId = $(this).closest('.post').attr('id')
  const commmentId = $(this).closest('.comments').attr('id')
  console.log(postId, commmentId)
  tweeter.removeComment(postId, commmentId)
  console.log(tweeter.getPosts())
  renderer.renderPosts(tweeter.getPosts())
})

$('#comment-button').on('click', function () {
  const postId = $(this).closest('.post').attr('id')
  const input = $(this).closest('.post').find('input')
  tweeter.addComment(postId, input.val())
  renderer.renderPosts(tweeter.getPosts())
  input.val(' ')
})