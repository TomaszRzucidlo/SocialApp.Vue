module.exports = {
    css:{
        loaderOptions:{
            sass:{
                additionalData: '@import "@/styles/base.scss"'
            },
            scss:{
                additionalData: '@import "@/styles/base.scss";'
            }
        }
    }
} 