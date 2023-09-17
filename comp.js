const compItem = {
    name: 'comp-item',
    template: `
      <div>
        <p>item Info</p>
      </div>
    `
}


Vue.component('new-component', {
    props: ['title', 'counter'],
    data() {
        return {

        }
    },

    components: {
        'comp': compItem
    },

    methods: {
        increase(step) {
            this.counter += step;
        },
    },

    template: `
      <div>
        <h3>{{ title }}</h3>
        <p>New template for Vue</p>
        <p>counter click {{ counter }}</p>
        <button @click="increase(2)">+2</button>
      </div>
    `
})

Vue.component('standard-comp', {
    data() {
        return {
            message: 'text message'
        }
    },
    methods: {
        newInfo() {
            console.log('Hello methods')
        }
    },
    computed: {
        newComp() {
            return this.message;
        }
    },

    template: `
      <h2>Standard component</h2>`
})

Vue.component('change-one', {
    template: `
        <div>
            <h2>Info change Component<h2>
            <p>New text block</p>
        </div>
    `
})

Vue.component('change-two', {
    template: `
        <div>
            <h2>2 change Component<h2>
            <p>Other text block</p>
        </div>
    `
})

Vue.component('change-three', {
    template: `
        <ul>
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
        </ul>
    `
})