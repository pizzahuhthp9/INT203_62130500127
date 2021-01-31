<template>
  <link href='https://css.gg/more-vertical-alt.css' rel='stylesheet'>
  
    <div id="preview" class="group mt-20 -mb-10">
      <a href="">
    <div class="h-38 w-68" id="video-preview">
      <div class="h-38 w-68 bg-white shadow-sm">
        <img :src="vidSrc" alt="" class="h-38 mx-auto" />
      </div>
      <div
        class="w-min h-5 bg-black rounded-sm bg-opacity-80 text-xs text-white p-0.5 float-right relative bottom-6 right-1"
      >
        <span class="font-semibold">{{durationTime}}</span>
      </div>
    </div>

    <div id="description-preview">
      <div class="flex flex-row w-68">
        <img v-bind:src="channelSrc" class="rounded-full w-9 h-9 bg-black" />

        <div class="w-56 h-auto">
          <p class="pl-3 break-words text-sm w-48 font-medium">
            {{name}}
          </p>
          <ul class="pl-3 text-sm text-gray-500">
            <li class="hover:text-gray-500">{{channelName}}</li>
            <li>{{views}}</li>
            <li>{{time}}</li>
          </ul>
        </div>
        <div class="w-7 h-6 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-500">
          <i class="gg-more-vertical-alt ml-3 mt-3"></i>
        </div>
        
      </div>
      
    </div>
    </a>
  </div>
  
</template>

<script>
export default {
  props:{
    name:String,
    channelName:String,
    view:Number,
    uploadDate: Date,
    vidSrc:String,
    channelSrc:String,
    duration:Number
  },
  computed:{
    durationTime(){
      let hr = 0 
      let min = 0
      let sec=this.duration
      if (sec>60) {
        min = Math.floor(sec/60)
        sec-=min*60
        if (min > 60) {
          hr = Math.floor(min/60)
          min -= hr*60
          return `${hr}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
        }else{
          return `${min}:${sec.toString().padStart(2, "0")}`
        }
      }else{
        return `0:${sec.toString().padStart(2, "0")}`
      }
    },
    views(){
      if (this.view > 1000000) {
        return `การดู ${Math.floor(this.view/100000)/10} ล้านครั้ง`
      } 
      else if(this.view > 100000){
        return `การดู ${Math.floor(this.view/10000)/10} แสนครั้ง`
      } else if(this.view > 10000){
        return `การดู ${Math.floor(this.view/1000)/10} หมื่นครั้ง`
      } else if(this.view > 1000){
        return `การดู ${Math.floor(this.view/1000)/10} พันครั้ง`
      } else{
        return `การดู ${this.view} ครั้ง`
      }
    },
    time(){
      let passed = new Date().getTime() - this.uploadDate.getTime()
      if (passed > 1000*60*60*24*30*12) {
        return `${Math.floor(passed/1000/60/60/24/30/12)} ปีที่ผ่านมา`
      } else if(passed > 1000*60*60*24*30){
        return `${Math.floor(passed/1000/60/60/24/30)} เดือนที่ผ่านมา`
      } else if(passed > 1000*60*60*24*7){
        return `${Math.floor(passed/1000/60/60/24/7)} สัปดาห์ที่ผ่านมา`
      } else if(passed > 1000*60*60*24){
        return `${Math.floor(passed/1000/60/60/24)} วันที่ผ่านมา`
      } else if(passed > 1000*60*60){
        return `${Math.floor(passed/1000/60/60)} ชั่วโมงที่ผ่านมา`
      } else if(passed > 1000*60){
        return `${Math.floor(passed/1000/60)} นาทีที่ผ่านมา`
      } else{
        return `${Math.floor(passed/1000)} วินาทีที่ผ่านมา`
      }
      return `asd`
    }
    
  }
}
</script>

<style scoped></style>
