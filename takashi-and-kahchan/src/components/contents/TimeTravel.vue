<template>
  <div v-on:click="hoge">
    <p>適当にクリックすると次の文章が表示されます</p>
    <h1>J( ‘ｰ`)し「たかしへ。時空を超えて、あなたを立派に育てます」</h1>
    <p>{{counter}}回押されたよ</p>
    <p>{{story}}</p>
  </div>
</template>

<script>
import token from '../../assets/contents/TimeTravel.json'

export default {
  name: 'TimeTravel',
  data () {
    return {
      msg: 'hoge',
      counter: 0,
      token: token,
      story: ''
    }
  },
  methods: {
    hoge: function () {
      this.counter += 1
      const counter = this.counter
      this.story = token.story.find(item => item.idx === counter).contents
    }
  }
}
</script>

<style scoped>

</style>
