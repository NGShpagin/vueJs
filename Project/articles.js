const Article = {
    data() {
        return {
            tags: [
                {name: "Kitchen"},
                {name: "Bedroom"},
                {name: "Building"},
                {name: "Architecture"},
                {name: "Kitchen Planning"},
                {name: "Bedroom"}
            ]
        }
    }
}

Vue.createApp(Article).mount('#article')