const App = {
    data() {
        return {
            articles: [
                {
                    image: "images/article-1.jpg",
                    tag: "Kitchen Design",
                    heading: "Let’s Get Solution For Building Construction Work",
                    date: "25 December,2022",
                },
                {
                    image: "images/article-2.jpg",
                    tag: "Living Design",
                    heading: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December,2022",
                },
                {
                    image: "images/article-3.jpg",
                    tag: "Interior Design",
                    heading: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022",
                },
                {
                    image: "images/article-4.jpg",
                    tag: "Kitchen Design",
                    heading: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022",
                },
                {
                    image: "images/article-5.jpg",
                    tag: "Living Design",
                    heading: "BLow Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December,2022",
                },
                {
                    image: "images/article-6.jpg",
                    tag: "Interior Design",
                    heading: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022",
                },
            ]
        }
    }
}

Vue.createApp(App).mount('#app')