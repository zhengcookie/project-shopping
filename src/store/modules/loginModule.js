import {jwtDecode} from "jwt-decode"
import local from "../../utils/lcoalUtils"
import api from "../../api"
import router from "../../router"

export default {
    namespaced: true,
    state: {
        user: {
            username: "",
            isLogined: false,
            token: ""
        }
    },
    mutations: {
        setUser(state, value) {
            state.user = value;
        },
        removeUser(state) {
            state.user = {
                username: "",
                isLogined: false,
                token: ""
            }
        }
    },
    actions: {
        setUserActions({ commit }, user) {
            api.login({
                username: user.username,
                password: user.password,
            })
                .then((res) => {
                    if (res.status === 200) {
                        const temp = {
                            username: jwtDecode(res.data).username,
                            isLogined: Boolean(jwtDecode(res.data).username),
                            token: res.data
                        }
                        commit("setUser", temp)
                        // 本地存储
                        local.setLocal("ego", temp)
                        /**
                         * 跳转到首页
                         */
                        router.push("/")
                    }
                });
        }
    }
}