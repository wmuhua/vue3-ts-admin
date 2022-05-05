import { getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { LoginParm } from "@/api/user/UserModel";
import { useStore } from "@/store";
export default function useLogin(loginModel:LoginParm) {
    const router = useRouter();

    const store = useStore();

    const { proxy } = getCurrentInstance() as any;

    //登录提交
    const login = async () => {
        //表单验证
        console.log(proxy)
        console.log(loginModel)
        proxy.$refs.loginFormRef.validate(async(valid: boolean) => {
            if (valid) {
                store.dispatch('user/login',loginModel).then(res =>{
                    console.log('登录成功')
                    // console.log(res)
                    // store.dispatch('user/getInfo')
                    if(res.data.code == 200){
                        //跳转到首页
                        router.push({path:'/'})
                    }
                })
            }
        })
    }
    return {
        login
    }
}