<template>
    <div>
        <v-card 
            class="pa-2 mb-1"
            :class="{'done': list.status === 'done'}"
            v-for="(list, index) in todoList"
            :key="index"
        >
           <p>{{list.memo}}</p>
           <p>{{list.status}}</p>

           <v-btn fab flat dark small color="primary" 
            v-if="list.status === 'created'"
            @click="$emit('statusControl', index, 'done')"
            >완료</v-btn>
           <v-btn fab flat dark small color="primary" 
            v-else
            @click="$emit('statusControl', index, 'created')"
            >부활</v-btn>
           <v-btn fab flat dark small color="primary" 
            @click="$emit('listDelete', index)"
            >제거</v-btn>
           <v-btn 
            @click="listEdit(list.memo, index)"
            v-if="list.status === 'created'"
            fab flat dark small color="yellow"
            >수정</v-btn>
        </v-card>
    </div>
</template>

<script>
import { EventBus } from "../../main" 

export default {
    props: ["todoList"],
    methods: {
        listEdit(memo, index) {
            console.log("호출 listEdit", memo, index)
            EventBus.listEdit(memo, index)
        }
    }
}
</script>

<style scoped>
.done {
    background-color: rgba(0, 0, 0, 0.1);
}

.done p {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5)
}
</style>>
