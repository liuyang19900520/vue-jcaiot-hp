<template>
    <div>
        <div v-if="!isMobile()">
            <router-view name="root"></router-view>
        </div>
        <div v-if="isMobile()">
            <router-view name="root-mobile"></router-view>
        </div>
    </div>
</template>

<script>
    import deviceUtils from "./utils/deviceUtils";

    export default {
        name: "App",
        methods: {
            isMobile: deviceUtils.isMobile
        }
    };
</script>
