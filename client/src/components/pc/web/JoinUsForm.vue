<template>
    <v-card
            class="overflow-hidden"
            color="teal lighten-1"
            dark
    >
        <v-toolbar
                flat
                color="teal"
        >
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">User Profile</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                    color="teal darken-3"
                    fab
                    small
                    @click="isEditing = !isEditing"
            >
                <v-icon v-if="isEditing">mdi-close</v-icon>
                <v-icon v-else>mdi-pencil</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-text>
            <v-text-field
                    :disabled="!isEditing"
                    color="white"
                    label="Name"
                    v-model="application.name"
            ></v-text-field>
            <v-text-field
                    :disabled="!isEditing"
                    color="white"
                    label="E-mail"
                    v-model="application.email"
            ></v-text-field>
            <v-select
                    :disabled="!isEditing"
                    color="white"
                    label="Type"
                    :items="items"
                    v-model="application.type"
            ></v-select>
            <v-text-field
                    :disabled="!isEditing"
                    color="white"
                    label="Profile"
                    v-model="application.profile"
            ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    :disabled="!isEditing"
                    color="success"
                    @click="save"
            >
                Save
            </v-btn>
        </v-card-actions>
        <v-snackbar
                v-model="hasSaved"
                :timeout="2000"
                absolute
                bottom
                left
        >
            Your profile has been submitted
        </v-snackbar>
    </v-card>
</template>


<script>
    export default {
        name: "JoinUsForm",
        data() {
            return {
                hasSaved: false,
                isEditing: null,
                model: null,
                items: ['','Expert', 'Enterprise', 'Association'],
                application:{},
            }
        },
        methods: {
            save() {
              this.$api.application.createApplication(this.application).then(res => {
                console.log(res.data);
                this.isEditing = !this.isEditing
                this.hasSaved = true
              })

            },
        },
    }
</script>
<style scoped>

</style>