import api from "../../api"

export default {
    namespaced: true,
    state: {
        contentInfo:[],
        contentData:{
            id:0,
            name:"",
            pid:0
        }
    },
    mutations: {
        setContentInfo(state,data){
            state.contentInfo = data;
        },
        setContentData(state,data){
            state.contentData = data;
        }

    },
    actions: {
        asyncSetContentInfo({ commit },data){
            commit("setContentData",data)
            api.contentInfoList({
                pid:data.pid
            }).then(res =>{
                if(res.data.status === 200){
                    commit("setContentInfo",res.data.result)
                }else{
                    commit("setContentInfo",[])
                }
            })
        }
    }
}