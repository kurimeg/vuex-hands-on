<template>
  <div>
    <img
    class="icon"
    src="@/assets/images/search_icon.png"
    @click="visible = !visible"
    >
    <div class="dialog-search" v-if="visible">
      <div class="header">検索</div>
      <img src="@/assets/images/search_button.png" class="icon-search">
      <input type="text" class="input" inputmode="kana">
      <div class="message">メッセージ</div>
      <div class="message">メッセージ</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dialog-search {
    overflow: hidden;
    width: 400px;
    border: 5px solid #28a1f7;
    border-radius: 15px;
    background-color: #5d5d5d;
    padding-bottom: 15px;
  }
  .icon {
    z-index: 2;
    position: absolute;
    width: 50px;
    height: 50px;
    margin-left: 3px;
    margin-top: 3px;
    cursor: pointer;
  }
  .header {
    margin-top: 5px;
    margin-left: 53px;
    color: #ffffff;
    font-size: 20px;
  }
  .input {
    margin-top: 10px;
    margin-left: 30px;
    width: 330px;
    height: 35px;
    text-indent: 2.3em;
    font-family: 'Century Gothic';
    font-size: 20px;
    background-color: #ffffff;
    color: #5d5d5d;
    border-radius: 20px;
    border-style: none;
    ime-mode: active;
  }
  .icon-search {
    position: absolute;
    margin-left: 35px;
    margin-top: 13px;
    width: 30px;
    height: 30px;
  }
  input:focus{
    outline:none;
  }
  button:focus{
    outline:none;
  }
  .message {
    margin-left: 30px;
    margin-top: 15px;
    color: #ffffff;
    font-size: 18px;
    height: 30px;
  }
</style>
