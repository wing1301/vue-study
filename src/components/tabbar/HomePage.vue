<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000" class="carousel">
            
            <mt-swipe-item v-for="item in carouselList" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
            
        </mt-swipe>

        <!-- 九宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/html">
                <img src="../../images/home/html.jpg" alt="">
                <div class="mui-media-body">html5</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home/css.jpg" alt="">
                <div class="mui-media-body">css3</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home/js.jpg" alt="">
                <div class="mui-media-body">javascript</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home/sass.jpg" alt="">
                <div class="mui-media-body">sass/less</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home/bootstrap.jpg" alt="">
                <div class="mui-media-body">bootstrap</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home/jquery.jpg" alt="">
                <div class="mui-media-body">jquery</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home/vue.jpg" alt="">
                <div class="mui-media-body">vue</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/home/tools.jpg" alt="">
                <div class="mui-media-body">tools</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-more"></span>
                <div class="mui-media-body">more</div></a></li>
		</ul> 
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'

    export default {
        data() {
            return {
                carouselList: []
            }
        },
        created() {
            this.getCarousel();
        },
        methods: {
            getCarousel (){
                this.$http.get("https://wing1301.github.io/api/getcarousel.json").then(result=>{
                    if(result.body.status === 0){
                        this.carouselList = result.body.message;
                    }else{
                        Toast("获取图片失败");
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .carousel {
        height: 200px;
        .mint-swipe-item {
            &:nth-child(1) {
                background-color: #f00;
                // background: url(../../images/home/nodejs.jpg);
            }
            &:nth-child(2) {
                background-color: #0f0;
            }
            &:nth-child(3) {
                background-color: #00f;
            }
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    .mui-grid-9 {
        li {
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
    }
</style>