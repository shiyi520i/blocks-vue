<template>
  <a>aaaaaa</a>
</template>
<script>
import managementClient from "@/authing/ManagementClient";

export default {
  methods: {
    geta() {

      console.log(managementClient.users.list,
         // managementClient.users.create,
         // managementClient.users.listRoles,
          //managementClient.users.search
      )
    }
  },
  mounted() {
    this.geta()
  }
}
</script>