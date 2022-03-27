<template>
    <div>
        <v-textarea
          outline
          v-model="memo"
          label="TODO 리스트를 입력해 주세요."
          value=""
        ></v-textarea>
        <v-btn v-if="mode === 'add'" @click="listAdd">추가</v-btn>
        <v-btn v-else @click="listEdit">수정</v-btn>
    </div>
</template>

<script>
import { EventBus } from "../../main"

export default {
    data() {
        return {
            memo: null,
            index: null,
            mode: "add"
        }
    },
    created() {
        EventBus.$on('listEdit', (memo, index) => {
            this.memo = memo
            this.index = index
            this.mode = "edit"
            // console.log("created ", memo, index)
        })
    },
    methods: {
         listAdd: function() {
            // console.log('추가')
            if (this.memo === null) {
                alert("TODO 리스트를 입력해 주세요.")
            } else {
                this.$emit("listAdd", this.memo)
                this.memo = null
            }
        }, 
        listEdit: function() {
            if (this.memo === null) {
                alert("TODO 리스트를 입력해 주세요.")
            } else {
                this.$emit("listEdit", this.memo, this.index)
                this.memo = null
                this.mode = "add"
            }
        }
    }
}
</script>