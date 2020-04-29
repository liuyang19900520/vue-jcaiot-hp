<template>
    <div>
        <v-toolbar flat>
            <template>
                <v-tabs v-model="tabs" centered>
                    <v-tab>协会</v-tab>
                    <v-tab>企业</v-tab>
                    <v-tab>专家</v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
            <v-tab-item>
                <MemberAssociationView></MemberAssociationView>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <MemberEnterpriseView></MemberEnterpriseView>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <MemberExpertView></MemberExpertView>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
    import MemberExpertView from "./MemberExpertView";
    import MemberEnterpriseView from "./MemberEnterpriseView";
    import MemberAssociationView from "./MemberAssociationView";

    export default {
        name: "MemberView",
        components: {MemberExpertView, MemberEnterpriseView, MemberAssociationView},
        data() {
            return {
                tabs: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
    }
</script>

<style scoped>

</style>
