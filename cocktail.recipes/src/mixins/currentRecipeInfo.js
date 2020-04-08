const recipeMixin = {
    
    data() {
        return {
            id: ''
        }

    },
    computed: {
        currentReciepId() {
            return 
        }
    },
    methods: {
        changeId(id) {
            this.id = id;
        }
    },
    // watch: {
    //     id: function(o, n) {
            
    //     }
    // }
}

export default recipeMixin;