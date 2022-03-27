<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 text-xs-center>
                <h1>TODO 리스트</h1>
            </v-flex>
            <v-flex xs6 pa-1>
                <List
                    :todoList="todoList"
                    @statusControl="statusControl"
                    @listDelete="listDelete"
                    >
                    </List>
            </v-flex>
            <v-flex xs6 pa-1>
                <ListAdd
                    @listAdd="listAdd"
                    @listEdit="listEdit"
                ></ListAdd>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import List from './List'
import ListAdd from './ListAdd'

export default {
    components: {
        List,
        ListAdd
    },
    data() {
        return {
            todoList: []
        }
    },
    computed: {
        countDone() {
            let count = 0
            this.todoList.forEach(list => {
                if(list.status === 'done') count++
            })
            return count
        }
    },
    methods: {
        listAdd: function (memo) {
            // console.log("받았어")
            this.todoList.push({memo: memo, status: 'created'})
        },
        listEdit: function (memo, index) {
            this.todoList[index].memo = memo
        },
        statusControl: function (index, status) {
            // console.log("statusControl")
            this.todoList[index].status = status
        },
        listDelete: function (index) {
            this.todoList.splice(index, 1)
        }
    }
}
</script>