import router from "./index"

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    if (to.meta.isLogin){
        let token = false;
        if(token){
            next
        }else{
            next({
                name:"Login"
            })
        }
    }else{
        next()
    }
})