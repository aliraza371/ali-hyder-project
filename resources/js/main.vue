<template>
    <div class="container-scroller">
                <navbar></navbar>
        <div class="container-fluid page-body-wrapper">
                        <sidebar></sidebar>
            <div class="main-panel">
                <div class="content-wrapper">
                                        <bread-crumb></bread-crumb>
                    <router-view></router-view>
                </div>
                <footer></footer>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    components: {
        Sidebar: () => import('./Components/Sidebar'),
        Navbar: () => import('./Components/Navbar'),
        BreadCrumb: () => import('./Components/BreadCrumb'),
        Footer: () => import('./Components/Footer')
    }
}
</script>
