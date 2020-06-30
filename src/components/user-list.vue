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
        <li v-for="user in users" :key="user.email">
          <UserRow name=user.name email=user.email isAdmin=user.is_admin />
        </li>
      </tbody>
    </table>
  </div>
</template>
<script>
import UserRow from "@/components/user-row.vue";
import UserService from '@/services/user-service.js';
export default {
  name: "UserList",
  components: {
    UserRow
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
          console.log(`Got data: ${users}`);
          this.$set(this, "users", users);
        }).bind(this)
      );
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
