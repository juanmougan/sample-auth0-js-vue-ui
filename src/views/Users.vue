<template>
  <div class="about">
    <h1>Listing Users</h1>
    <UserList />
  </div>
</template>

<script>
import UserList from "@/components/user-list";

export default {
  name: 'users',
  components: {
    UserList
  }
}
</script>
