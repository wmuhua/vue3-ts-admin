<template>
    <div class="sidebar-logo-container">
        <transition name="fade">
            <router-link v-if="isCollapse" key="collapse" class="sidebar-logo-link" to="/">
                <img v-if="logo" :src="logo" class="sidebar-logo" />
                <h1 v-else class="sidebar-title">{{ title }}</h1>
            </router-link>
            <router-link v-else key="expand" class="sidebar-logo-link" to="/">
                <img v-if="logo" :src="logo" class="sidebar-logo" />
                <h1 class="sidebar-title">{{ title }}</h1>
            </router-link>
        </transition>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from '@/store/index'
defineProps({
    isCollapse:Boolean
})
const store = useStore()
// const collapse = computed(() => {
//     // return store.getters['getCollapse']
//     return store.getters['menu/getCollapse']
// })
const logo = ref('https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png')
const title = ref('Vue3 + TypeScript实战')
</script>

<style lang="scss" scoped>
// .sidebarLogoFade-enter-active {
//     transition: opacity 2.5s;
// }

// .sidebarLogoFade-enter-from,
// .sidebarLogoFade-leave-to {
//     transition: opacity 0s;
// }
.fade-enter-active,.fade-leave-actice {
  transition: opacity 0.5s;
}
 
.fade-enter-from,.fade-leave-to {
  opacity: 10;
}
.sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    text-align: center;
    overflow: hidden;

    & .sidebar-logo-link {
        height: 100%;
        width: 100%;

        & .sidebar-logo {
            width: 32px;
            height: 32px;
            vertical-align: middle;
            margin-right: 12px;
        }

        & .sidebar-title {
            display: inline-block;
            margin: 0;
            color: #fff;
            font-weight: 600;
            line-height: 50px;
            font-size: 14px;
            font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
            vertical-align: middle;
        }
    }

    &.collapse {
        .sidebar-logo {
            margin-right: 0px;
        }
    }
}
</style>