<template>
    <div class="newsinfo">
        <h3 class="title">{{ newsinfo.title }}</h3>
        <div class="subtitle">
            <span>发表时间：{{ newsinfo.add_time | dataFormat }}</span>
            <span>点击次数：{{ newsinfo.click }}次</span>
        </div>
        <div class="content" v-html="newsinfo.content"></div>
        <comment :id="this.id"></comment>
    </div>
</template>

<script>
    //导入Toast组件
    import { Toast } from "mint-ui"
    //导入评论组件
    import comment from "../pub/comment.vue"
    export default {
        data() {
            return {
                id: this.$route.params.id,
                newsinfo: {}
            }
        },
        components: {
            comment
        },
        created() {
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo() {
                this.$http.get("https://wing1301.github.io/api/getnew/"+this.id+".json").then(result=>{
                    if(result.body.status === 0){
                        this.newsinfo = result.body.message[0];
                    }else{
                        Toast("获取新闻信息失败");
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .newsinfo {
        padding: 4px;
        .title {
            font-size: 16px;
            color: #000;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            font-size: 12px;
            color:darkgray;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 4px;
            
        }
        .content {
            border-bottom : 1px solid #ccc;
        }
        
    }
</style>