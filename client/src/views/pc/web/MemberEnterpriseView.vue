<template>
    <div class="center80">
<!--        <div class="text-center d-flex pb-4">-->
        <!--            <v-btn @click="all">all</v-btn>-->
        <!--            <div>{{ panel }}</div>-->
        <!--            <v-btn @click="none">none</v-btn>-->
        <!--        </div>-->

        <v-expansion-panels
                v-model="panel"
                multiple
        >
            <v-expansion-panel
                    v-for="(item,i) in items"
                    :key="i"
            >
                <v-expansion-panel-header>
                    <v-avatar
                            class="profile"
                            color="grey"
                            size="120"
                            tile
                    >
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
                    </v-avatar>
                    <v-spacer></v-spacer>
                    <h2>
                        Header {{ item.title }}
                    </h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>{{ item.description }}</v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    export default {
        name: "MemberEnterpriseView",

        data() {
            return {
                panel: [],
                items: [{
                    title: "Title 1",
                    description: "\n" +
                        "                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
                        "                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
                        "                    aliquip ex ea commodo consequat.\n"
                }, {
                    title: "Title 2",
                    description: "\n" +
                        "                    2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
                        "                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
                        "                    aliquip ex ea commodo consequat.\n"
                }]
            }
        },
        methods: {
            // Create an array the length of our items
            // with all values as true
            all() {
                for (let m = 0; m < this.items.length; m++) {
                    if (!this.panel.includes(m)) {
                        this.panel.push(m);
                    }
                }
            },
            // Reset the panel
            none() {
                this.panel = []
            },
        }
        ,
        mounted() {
            this.all();
        }
    }
</script>

<style scoped>
    .center80 {
        margin-left: 10%;
        margin-right: 10%;
    }

    .not-see {
        display: none;
    }

</style>