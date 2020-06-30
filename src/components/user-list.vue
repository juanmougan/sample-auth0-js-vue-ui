<template>
  <div class="users container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Admin?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.email">
          <!-- <UserRow name=user.name email=user.email isAdmin=user.is_admin /> -->
          <td>{{user.name}}</td><td>{{user.email}}</td><td>{{user.is_admin}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import UserRow from "@/components/user-row.vue";
import UserService from '@/services/user-service.js';
export default {
  name: "UserList",
  components: {
    // UserRow
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.getUsersData(); // NEW - call getUsersData() when the instance is created
  },
  // NEW
  methods: {
    async getUsersData() {
      // NEW - Use the userService to call the getUsers() method
      UserService.getUsers()
      .then(
        (users => {
          this.$set(this, "users", users);
        }).bind(this)
      )
      // TODO this shouldn't happen, unless there's any Auth0 issue, but improve it anyway
      .catch(err => {console.log("Something went wrong: ", err)});
    }
  }
};
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>
