<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>

                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" flat>
                                <v-toolbar-title>Login Form</v-toolbar-title>
                                <v-spacer/>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Login"
                                            name="login"
                                            prepend-icon="mdi-face"
                                            type="text"
                                            v-model="username"
                                            @focus="focusfns"
                                    />
                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                            v-model="password"
                                            @focus="focusfns"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="primary" @click="login()">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-alert type="error" v-if="loginError">
                            I'm an error alert.
                        </v-alert>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import storage from "../../store/storage";

    export default {
        data: () => ({
            username: null,
            password: null,
            loginError: false,
        }),
        methods: {
            login: function () {
                this.$api.auth.login(this.username, this.password).then(res => {
                    console.log(res.data.accessToken);
                    storage.set("accessToken", res.data.accessToken);
                    this.$router.push("/admin");
                }).catch(error => {
                    console.log(error);
                    this.loginError = true;
                });
            },
            focusfns: function () {
                this.loginError = false;
            }
        }
    };
</script>