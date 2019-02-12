<template>
    <div class="newslist">
        <ul>
            <li v-for="item in newsList" :key="item.id">
                <div class="news">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="zhaiyao">{{ item.zhaiyao }}</p>
                    <p class="info">
                        <span class="ctime">时间：{{ item.add_time | dataFormat}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="click">点击：{{ item.click }}次</span>
                    </p>
                </div>
                <img :src="item.img_url" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from "mint-ui"
    export default {
        data (){
            return {
                newsList: []
            }
        },
        created() {
            this.getNewsList();
        },
        methods:{
            getNewsList() {
                this.$http.get("https://wing1301.github.io/api/getnewslist.json").then(result=>{
                    if(result.body.status === 0){
                        this.newsList = result.body.message;
                    }else{
                        Toast("获取新闻列表失败");
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .newslist {
        background-color: #fff;
        padding: 4px;
        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            
            li {
                display: flex;
                padding: 5px;
                margin-bottom: 4px;
                
                .news {
                    position: relative;
                    h3{
                        font-size: 14px;
                        font-weight: normal;
                    }
                    p {
                        font-size: 12px;
                        line-height: 12px;
                        ::before {
                            content: "";
                            width: 100%;
                            height: 1px;
                            background-color: rgba(119, 106, 106, 0.137);
                            position: absolute;
                            bottom: -5px;
                        }
                    }
                }
                img {
                width: 120px;
                height: 80px;
                margin-left: 5px;
                
                }
            }
        }
    }
</style>