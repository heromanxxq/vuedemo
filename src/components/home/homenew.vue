
<template>    
    <Layout style="width:100%;height:100%">
	<LayoutPanel region="north" style="height:50px;">
		<HeaderV :title="app.title" :engtitle="app.engtitle" :logourl="app.logourl"></HeaderV>
	</LayoutPanel>
    <!-- 
	<LayoutPanel region="south" style="height:50px;">
		<div class="">South Region</div>
	</LayoutPanel>
    -->
	<LayoutPanel region="west" style="width:120px;">
		<div class="">West Region</div>
	</LayoutPanel>
    <!-- 
	<LayoutPanel region="east" style="width:120px;">
		<div class="">East Region</div>
	</LayoutPanel>
    -->
	<LayoutPanel region="center" style="height:100%">
		<div class="">Center Region</div>
	</LayoutPanel>
    </Layout>
    
</template>

<script>
import HeaderV from './header.vue'

export default {
    data() {
        return {
            app:{
                title: 'app后端管理系统',
                engtitle: 'Enterprise Information Manage System',
                logourl: '../../assets/images/login/login1.jpg'
            }
        }
    },
    components:{
        HeaderV
    }
}
</script>

<style>

</style>