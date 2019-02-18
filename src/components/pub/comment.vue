<template>
    <div class="comment">
        <h1>发表评论：</h1>
        <div class="addcmt">
            <textarea cols="30" rows="5" placeholder="既然看到这了，说点什么吧～～" v-model="msg"></textarea>
            <button class="mint-button mint-button--primary mint-button--large" @click="addcmt">发表评论</button>
        </div>
        <hr />
        <h1>评论列表:</h1>
        <div class="cmt" v-for="(item,i) in commentList">
            <p class="info">
                <span class="username">{{ i+1 }}楼用户：{{ item.user_name }}</span>
                <span class="addtime">发表时间：{{ item.add_time | dataFormat}}</span>
            </p>
            <p class="content">{{ item.content }}</p>
        </div>
        
    </div>
</template>

<script>
    import { Toast } from "mint-ui"
    export default {
        data() {
            return {
                commentList: [],
                msg: ""
            };
        },
        created() {
            this.getCommentList()
        },
        methods: {
            getCommentList() {
                this.$http.get("https://wing1301.github.io/api/getcomments/"+ this.id +".json").then(result=>{
                    if(result.body.status === 0){
                        this.commentList = result.body.message;
                    }else{
                        Toast("获取评论失败");
                    }
                })
            },
            addcmt() {
                if(this.msg.trim().length === 0){
                    Toast("评论内容不能为空");
                    return;
                }else{
                    var cmt = {"user_name":"匿名","add_time":new Date(),"content":this.msg};
                    this.commentList.unshift(cmt);
                    this.msg = "";
                }
            }
        },
        props: ["id"]
    }
</script>

<style lang="scss" scoped>
    .comment {
        margin-top: 15px;
        h1 {
            color:#3987da;
            font-size: 16px;
        }
        .addcmt {
            textarea {
                font-size: 14px;
                margin: 0;
                background-color: rgb(250, 246, 246);
            }
            
        }
        .cmt {
            border: 1px solid #ccc;
            padding: 5px;
            margin: 4px;
            border-radius: 5px;
            box-shadow: 2px 2px 5px #eee;
            .info {
                display: flex;
                justify-content: space-between;
            }
            .content {
                color: #333;
            }
        }
    }
</style>