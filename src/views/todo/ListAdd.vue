<template>
    <div>
        <v-textarea
          outline
          v-model="memo"
          label="TODO 리스트를 입력해 주세요."
          value=""
        ></v-textarea>
        <v-btn @click="listAdd">TODO 리스트 추가</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memo: null
        }
    },
    methods: {
         listAdd: function() {
            // console.log('추가')
            if (this.memo === null) {
                alert("TODO 리스트를 입력해 주세요.")
            } else {
                this.$emit("listAdd", this.memo)
            }
        }
    }
}
</script>