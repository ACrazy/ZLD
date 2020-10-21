<template>
  <div>
    <x-header title="首页">
      <template slot="overwrite-left">{{space}}</template>
    </x-header>

    <swiper :list="swiperList"></swiper>

    <tabbar>
      <tabbar-item
        v-for="item in tabberList"
        :key="item.path"
        icon-class=""
        @on-item-click="changeTab(item.path)"
      >
        <template slot="label">{{ item.title }}</template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Swiper ,XHeader} from "vux";

export default {
  components: {
    Tabbar,
    TabbarItem,
    Swiper,XHeader,
  },
  data() {
    return {
      space: "",
      tabberList: [
        { path: "#", title: "菜单" },
        { path: "/details", title: "详情" },
        { path: "#", title: "通讯录" },
        { path: "#", title: "我的" },
      ],
      swiperList: [
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg",
          title: "送你一朵fua",
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/5.jpg",
          title: "送你一次旅行",
          fallbackImg: "https://static.vux.li/demo/3.jpg",
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/5.jpg",
          title: "送你一次旅行",
          fallbackImg: "https://static.vux.li/demo/3.jpg",
        }
      ],
    };
  },
  methods: {
    changeTab(tabName) {
      this.$router.push(tabName);
    },
  },
};
</script>

<style></style>
