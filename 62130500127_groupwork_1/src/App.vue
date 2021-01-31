<template>
  <link
    href="https://css.gg/css?=|add|bell|menu-grid-r|menu|mic|search"
    rel="stylesheet"
  />
  <div id="app">
    <nav class="bg-white w-screen h-14 fixed z-10 opacity-98 block">
      <div class="flex flex-row items-stretch px-4 mt-3">
        <div class="w-10 mr-4 flex justify-center items-center">
          <i class="gg-menu text-gray-600"></i>
        </div>
        <div class="w-36 flex items-center pl-6">
          <p class="text-center w-auto">youbube</p>
        </div>
        <div class="w-7/12 ml-16 flex items-center">
          <div
            class="border-gray-400 border rounded-l-sm w-9/12 h-8 flex items-center px-3"
          >
            <input
              type="text"
              class="w-full h-6 focus:outline-none"
              placeholder="ค้นหา"
            />
          </div>
          <div
            class="w-18 h-8 border-r border-t border-b border-gray-400 rounded-r-sm bg-gray-100 flex justify-center items-center"
          >
            <i class="gg-search text-gray-500"></i>
          </div>
          <div class="h-8 w-18 flex justify-center items-center">
            <i class="gg-mic text-gray-500"></i>
          </div>
        </div>
        <div class="float-right w-64 px-3 flex items-stretch justify-end">
          <div class="w-16 text-gray-500 flex items-center justify-center">
            <i class="gg-add"></i>
          </div>
          <div class="w-16 text-gray-500 flex items-center justify-center">
            <i class="gg-menu-grid-r"></i>
          </div>
          <div class="w-16 text-gray-500 flex items-center justify-center">
            <i class="gg-bell"></i>
          </div>
          <div class="w-16 text-gray-500 flex items-center justify-center">
            <!-- <div class="bg-black rounded-full w-8 h-8"></div> -->
            <img
              src="src/assets/user.png"
              alt=""
              class="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>

    <!-- <ul class="flex flex-row justify-center z-20">
      <li><router-link to="/page">page</router-link></li>
      <li><router-link to="/main" class="ml-5">main</router-link></li>
      <li><router-link to="/test">test</router-link></li>
    </ul> -->

    <router-view></router-view>
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<style>
body {
  background-color: rgb(250, 250, 250);
}
</style>
