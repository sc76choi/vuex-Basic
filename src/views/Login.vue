<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert
                    class="mb-3"
                    :value="isError"
                    type="error"
                    >
                    아이디와 비밀번호를 입력해 주세요.
                </v-alert>
                <v-alert
                    :value="loginSuccess"
                    type="success"
                    >
                    로그인이 완료되었습니다.
                </v-alert>
                <v-card>
                    <v-toolbar flat height="50">
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <v-text-field
                            v-model="email"
                            label="email을 입력하세요."
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            type="password"
                            label="password를 입력하세요."
                        ></v-text-field>
                        <v-btn color="primary" large block depressed
                        @click="login"
                        >로그인</v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            allUsers: [
                {id:1, name:'sc', email:'sc@gmail.com', password:'1234'},
                {id:2, name:'uw', email:'uw@gmail.com', password:'1234'}
            ],
            isError: false,
            loginSuccess: false
        }
    },
    methods: {
        login() {
            // 전체 유저에서 해당 이메일로 유저를 찾는다.
            let selectedUser = null
            this.allUsers.forEach(user => {
                if (user.email === this.email) selectedUser = user
            })
            
            if (selectedUser === null ) {
                this.isError = true
                //alert('입력하신 이메일이 없습니다.')
            } else {
                console.log(selectedUser.password, this.password)

                if(selectedUser.password !== this.password ) {
                    this.isError = true
                } else {
                    this.isError = false
                    this.loginSuccess = true
                }
                // if(selectedUser.password !== this.password) {
                //     alert('입력하신 이메일과 비밀번호가 일치하지 않습니다.')
                // } else {
                //     alert('로그인이 완료되었습니다.')
                // }
            }
            // 그 유저의 비밀번호화 입력된 비밀번호를 비교한다.
            console.log(this.email, this.password)
            return selectedUser
        }
    }
}
</script>