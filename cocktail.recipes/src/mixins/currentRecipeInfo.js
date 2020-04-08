let testId = '';

const recipeInfo = {
    methods: {
        copyId(i) {
            testId = i;
            return testId;
        }
    },
    computed: {
        getId: () => {return testId}
    }
}

export default recipeInfo;