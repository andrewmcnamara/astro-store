<script>
  import { profile } from '../stores/profile.js'
  import { Post } from '../stores/post.js'

  export let postId

  const post = Post(postId)
</script>

<header>{$post.title} for {$profile.name}</header>
