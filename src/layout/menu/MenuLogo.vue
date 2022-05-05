<template>
    <div class="logo">
        <img :src="logo" />
        <div v-if="show" class="logo-title">{{ title }}</div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
const props = defineProps({
    collapsed: {
        type: Boolean,
        required: true
    }
})
const show = ref<boolean>(true)
const logo = ref('https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png')
const title = ref('Vue3 + TypeScript实战')
watch(
    () => props.collapsed,
    (collapsed: boolean) => {
        if (!collapsed) {
            setTimeout(() => {
                show.value = !collapsed
            }, 300)
        } else {
            show.value = !collapsed
        }
    }
)
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    text-align: center;
    cursor: pointer;
    align-items: center;
    img {
        width: 32px;
        height: 32px;
        margin-right: 12px;
        margin-left: 20px;
    }
    .logo-title {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 15px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
        transition: 0.5s;
    }
}
</style>