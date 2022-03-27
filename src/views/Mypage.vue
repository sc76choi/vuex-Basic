<template>
  <div>{{ userInfo.name }}님 환경합니다.</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>
