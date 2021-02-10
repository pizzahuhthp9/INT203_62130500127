    const app = {
        data() {
            return {
                imageSrc: ['images/1.jpg'],
                currentImg: 0,
            }
        },
        computed: {
            current(){
                return this.imageSrc[this.current];
            }
        },
        methods: {
            setImgTo(index){
                this.currentImg = index;
            }
        },

    }
    Vue.createApp(app).mount('#app')