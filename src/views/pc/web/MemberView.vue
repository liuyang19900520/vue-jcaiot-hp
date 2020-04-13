<template>
    <div>
        <v-tabs
                v-model="tab"
                background-color="transparent"
                color="teal"
                grow
        >
            <v-tab> 专家
            </v-tab>
            <v-tab> 协会
            </v-tab>
            <v-tab> 企业
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <MemberExpertView></MemberExpertView>
            </v-tab-item>
            <v-tab-item>
                <MemberExpertView></MemberExpertView>
            </v-tab-item>
            <v-tab-item>
                <MemberExpertView></MemberExpertView>
            </v-tab-item>

        </v-tabs-items>
    </div>
</template>
<script>
    import MemberExpertView from "./MemberExpertView";

    export default {
        name: "MemberView",
        components: {MemberExpertView},
        data() {
            return {
                tab: null,
                items: [
                    'Appetizers', 'Entrees', 'Deserts',
                ],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
    }
</script>

<style scoped>
    /* Helper classes */
    .member-view {
        width: 100%
    }
</style>
