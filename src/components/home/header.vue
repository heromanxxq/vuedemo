<template>
    <div class="box">
        <div class="header-left">
            <img :src="logourl" alt="">
            <div class="hl2">
                <div class="hl2-zh">{{title}}</div>
                <div class="hl2-en">{{engtitle}}</div>
            </div>
        </div>
        <div class="header-right">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        title: {
            type: String,
            default: 'hello world'
        },
        engtitle: {
            type: String,
            default: 'hello world'
        },
        logourl: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.box{
    width: 100%;
    height: 100%;
    border: 1px solid red;
    display: flex;

}
.header-left{
    width: 70%;
    display: flex;
}
.header-right{
    width: 30%;
}
.hl2{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
.hl2-zh{
    font-size: 18px;
    color: #0074a6;
}
.hl2-en{
    color:#9aa5a9;
}
</style>