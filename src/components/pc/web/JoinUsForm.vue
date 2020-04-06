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
            ></v-text-field>
            <v-text-field
                    :disabled="!isEditing"
                    color="white"
                    label="E-mail"
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
            Your profile has been updated
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
                states: [
                    {name: 'Florida', abbr: 'FL', id: 1},
                    {name: 'Georgia', abbr: 'GA', id: 2},
                    {name: 'Nebraska', abbr: 'NE', id: 3},
                    {name: 'California', abbr: 'CA', id: 4},
                    {name: 'New York', abbr: 'NY', id: 5},
                ],
            }
        },

        methods: {
            save() {
                this.isEditing = !this.isEditing
                this.hasSaved = true
            },
        },
    }
</script>
<style scoped>

</style>