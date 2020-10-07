<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
var nav = new Vue({
    el: '#nav',
    data: {
        isOpen: false,
        items: [
            {
                url: '#',
                name: 'Home'
            },
            {
                url: '#',
                name: 'About'
            },
            {
                url: '#',
                name: 'Service',
                children: [
                    {
                        url: '#',
                        name: 'Service1'
                    },
                    {
                        url: '#',
                        name: 'Service2'
                    },
                    {
                        url: '#',
                        name: 'Service3'
                    },
                ]
            },
            {
                url: '#',
                name: 'Contact'
            }
        ]
    },

    methods: {
        mouseover: function () {
            this.isOpen = true;
        },
        mouseleave: function () {
            this.isOpen = false;
        }
    }
});
</script>