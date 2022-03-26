<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
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
            password: null
        }
    }
}
</script>