
import { AddDeptModel } from '@/api/dept/DeptModel'
import { reactive } from 'vue'
export default function useBaseModel() {
    //表单验证
    const rules = reactive({
        parentName: [{
            required: true,
            message: '请选择上级部门',
            trigger: 'change',
        }],
        name: [{
            required: true,
            message: '请填写部门名称',
            trigger: 'change',
        }]
    })

    //表单数据
    const dialogModel = reactive<AddDeptModel>({
        type: "",
        id: "",
        pid: "",
        parentName: "",
        manager: "",
        deptAddress: "",
        deptPhone: "",
        name: "",
        deptCode: "",
        orderNum: ""
    })


    return {
        rules,
        dialogModel
    }
}