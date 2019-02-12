<template>
    <div class="app-container">
        <!-- header部分 -->
        <mt-header title="vue-study">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
                <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <!-- body部分 -->
          <transition>
              <router-view></router-view>
          </transition>
          
        <!-- footer部分 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/myproject">
				<span class="mui-icon mui-icon-extra mui-icon-extra-heart"></span>
                <!-- <span class="mui-badge">9</span></span> -->
				<span class="mui-tab-label">项目</span>
			</router-link>
			<router-link class="mui-tab-item" to="/studynews">
				<span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"></span>
				<span class="mui-tab-label">资讯</span>
			</router-link>
			<router-link class="mui-tab-item" to="/aboutme">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">关于</span>
			</router-link>
		</nav>
      
        
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'OK'
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-container {
        overflow-x: hidden;
        //设置激活类的另一种方法
        // .router-link-active{

        //color:#007aff !important;

        // }
        .v-enter,.v-leave-to {
            // transform: translate(100%);
            opacity: 0;
        }
        .v-enter-to,.v-leave {
            transition: all 0.5s ease;
        }
    }

    
</style>



