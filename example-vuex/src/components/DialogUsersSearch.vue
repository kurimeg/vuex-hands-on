<template>
  <div>
    <img
    class="toggle-icon"
    src="@/assets/images/search_icon.png"
    @click="visible = !visible"
    >
    <div class="search" v-if="visible">
      <div class="search-header">検索</div>
      <img src="@/assets/images/search_button.png" class="search-icon">
      <input type="text" class="search-input" inputmode="kana" v-model="searchText">
      <!-- 1st Step: 社員全件表示 -->
      <div class="search-message">メッセージ</div>
      <div class="search-result" v-for="user in users" :key="user.EMP_NO">{{ user.EMP_NO }} {{ user.EMP_NM }}</div>

      <!-- 2nd Step: 検索処理 -->
      <!-- <div class="search-message">{{ searchResults.message }}</div>
      <div class="search-result" v-for="user in searchResults.filteredUsers" :key="user.EMP_NO">{{ user.EMP_NO }} {{ user.EMP_NM }}</div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      visible: false,
      searchText: null
    }
  },
  computed: {
    // 1st Step: 社員全件表示
    ...mapState('feature/user', ['users'])

    // 2nd Step: 検索処理
    // ...mapState('feature/user', {
    //   searchResults (state) {
    //     if (!this.searchText) return []

    //     let filteredUsers = state.users.filter(user => {
    //       let knj = false
    //       let kana = false
    //       if (user.EMP_NM) knj = user.EMP_NM.replace(/\s+/g, '').startsWith(this.searchText)
    //       if (user.EMP_KANA_NM) kana = user.EMP_KANA_NM.replace(/\s+/g, '').startsWith(this.searchText)

    //       return knj || kana
    //     })
    //     let message = ''
    //     if (filteredUsers.length > 0) {
    //       message = '下記候補から選択してください。'
    //     } else {
    //       message = '検索結果がありません。'
    //     }

    //     return { filteredUsers: filteredUsers, message: message }
    //   }
    // })
  },
  created: function () {
    this.fetchUsers()
  },
  methods: {
    ...mapActions({
      fetchUsers: 'feature/user/fetchUsers'
    })
  }
}
</script>

<style scoped>
  .toggle-icon {
    z-index: 2;
    position: absolute;
    width: 50px;
    height: 50px;
    margin-left: 8px;
    margin-top: 8px;
    cursor: pointer;
  }
  .search {
    overflow: hidden;
    width: 400px;
    border: 5px solid #28a1f7;
    border-radius: 15px;
    background-color: #5d5d5d;
    padding-bottom: 15px;
  }
  .search-header {
    margin-top: 15px;
    margin-left: 53px;
    color: #ffffff;
    font-size: 20px;
  }
  .search-input {
    margin-top: 20px;
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
  .search-icon {
    position: absolute;
    margin-left: 35px;
    margin-top: 23px;
    width: 30px;
    height: 30px;
  }
  input:focus{
    outline:none;
  }
  button:focus{
    outline:none;
  }
  .search-message {
    margin-left: 30px;
    margin-top: 15px;
    color: #ffffff;
    font-size: 18px;
    height: 30px;
  }
  .search-result {
    margin-left: 40px;
    margin-top: 5px;
    margin-bottom: 6px;
    color: #ffffff;
    font-size: 15px;
    display: block;
  }
</style>
