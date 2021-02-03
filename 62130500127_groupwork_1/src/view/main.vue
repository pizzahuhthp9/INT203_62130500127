<template>
  <div>
    <link href="https://css.gg/css?=|box|crowdfire|home|layout-grid-small|music|play-button-o|play-list-add|play-list-search" rel="stylesheet">
    <div class="h-screen w-18 bg-white float-left fixed opacity-98 flex flex-col justify-start text-center">
      <div class="w-18 h-16"></div>
      <div class="w-18 h-18 hover:bg-gray-300 text-red-600">
        <i class="gg-home mx-auto mt-6"></i>
        <p class="text-xxs py-2">หน้าแรก</p>
      </div>
      <div class="w-18 h-18 hover:bg-gray-300">
        <i class="gg-crowdfire mx-auto mt-4"></i>
        <p class="text-xxs py-2">มาแรง</p>
      </div>
      <div class="w-18 h-18 hover:bg-gray-300">
        <i class="gg-play-list-search mx-auto mt-6"></i>
        <p class="text-xxs py-2">กำลังติดตาม</p>
      </div>
      <div class="w-18 h-18 hover:bg-gray-300">
        <i class="gg-play-button-o mx-auto mt-4"></i>
        <p class="text-xxs py-2">originals</p>
      </div>
      <div class="w-18 h-18 hover:bg-gray-300">
        <i class="gg-music mx-auto top-5"></i>
        <p class="text-xxs py-2 mt-5">music</p>
      </div>

      <div class="w-18 h-18 hover:bg-gray-300">
        <i class="gg-box mx-auto mt-3.5"></i>
        <p class="text-xxs py-2">คลังวิดีโอ</p>
      </div>
    </div>
    <div class="flex flex-row flex-wrap w-11/12 space-x-4 ml-20">
      <Preview
        v-for="vid in videos"
        :key="vid"
        :name="vid.name"
        :channel-name="vid.channelName"
        :view="vid.view"
        :vidSrc="vid.vidSrc"
        :channel-src="vid.channelSrc"
        :duration="vid.duration"
        :uploadDate="vid.uploadDate"
      ></Preview>
    </div>
  </div>
</template>

<script setup>
import Preview from "../components/preview.vue";
</script>
<script>
export default {
  data() {
    return {
      videos: [
        {
          name: "เรียกข้าว่าองค์จักรพรรดิ (Star Wars Battlefront II)",
          channelName: "Gssspotted",
          view: 99999,
          uploadDate: new Date(2021, 0, 30, 20, 52, 34),
          vidSrc:
            "https://i.ytimg.com/vi/GSrf29cnyR0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPKYY-vWHKlJI8PvGpIevonC9iJg",
          channelSrc:
            "https://yt3.ggpht.com/ytc/AAUvwni1VV1TpxuMKXw0_C5DoPnu401pfBJHvlGrHLYpDQ=s176-c-k-c0x00ffffff-no-rj",
          duration: 456,
        },
        {
          name: "Tattoo Colour - คืนนี้สบาย [Official Music Video]",
          channelName: "SMALLROOM",
          view: 15766115,
          uploadDate: new Date(2013, 11, 22, 0, 0, 0),
          vidSrc:
            "https://i.ytimg.com/vi/9pNBYSto1Ro/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXjxs8OqbWdPf74xicve1fWt4xbQ",
          channelSrc:
            "https://yt3.ggpht.com/ytc/AAUvwniUWHT89rQL1n6EsDRTdkOxrGCmjwSfZPemE3uExA=s68-c-k-c0x00ffffff-no-rj",
          duration: 333,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        },
        {
          name: "Clip Name",
          channelName: "Channel Name",
          view: 99999999999,
          uploadDate: new Date(),
          vidSrc: "src/assets/youtube-thumbnail.jpg",
          channelSrc: "src/assets/youtube-channel.jpg",
          duration: 123,
        }, 
      ],
    };
  },
};
</script>
<style scoped></style>
