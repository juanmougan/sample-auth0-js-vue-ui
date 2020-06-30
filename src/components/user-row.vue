// {"name": "Juan Manuel Mougan", "email": "juan@mymail.com", "is_admin": true}
<template>
  <tr><td>{{ name }}</td><td>{{ email }}</td><td>{{ isAdmin }}</td></tr>
</template>

<script>
  export default {
    name: 'user-row',
    props: ['name', 'email', 'isAdmin'],
  };
</script>
