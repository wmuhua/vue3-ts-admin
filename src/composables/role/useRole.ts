import { AddRoleModel } from "@/api/role/RoleModel"
import { EditType } from "@/type/BaseEnum"
import { ref } from "vue"
import { addRoleApi, editRoleApi, deleteRoleApi } from "@/api/role/role"
import { Result } from "@/http/request"
import useInstance from "@/hooks/useInstance"
export default function useRole(getRoleList) {
    const { global } = useInstance()
    //分配权限弹框的ref属性
    const assignMenuRef = ref<{show:(roleId:string,name:string)=>void}>()
    //定义弹框的 ref属性
    const addRoleRef = ref<{ show: (type: string, row?: AddRoleModel) => void }>()
    //新增
    const addBtn = () => {
        addRoleRef.value?.show(EditType.ADD)
    }
    //编辑
    const editBtn = (row: AddRoleModel) => {
        addRoleRef.value?.show(EditType.EDIT, row)
    }
    //删除
    const deleteBtn = async (id: number) => {
        let parm = {
            id: id
        }
        //信息确认
        let confirm = await global.$myconfirm('确定删除该数据吗?')
        if (confirm) {
            let res = await deleteRoleApi(parm)
            if (res && res.code == 200) {
                //信息提示
                global.$message({ message: res.msg, type: 'success' })
                //刷新表格
                getRoleList();

            }
        }
    }
    //保存
    const save = async (parm: AddRoleModel) => {
        console.log('父组件接收到参数')
        console.log(parm)
        let res: Result;
        if (parm.type == EditType.ADD) {
            res = await addRoleApi(parm)
        } else {
            res = await editRoleApi(parm)
        }
        if (res && res.code == 200) {
            //信息提示
            global.$message({ message: res.msg, type: 'success' })
            //刷新表格
            getRoleList();
        }
    }
    //分配权限按钮
    const assignPermission = (roleId:string,name:string) => {
        assignMenuRef.value?.show(roleId,name)
    }
    return {
        addBtn,
        editBtn,
        deleteBtn,
        save,
        assignPermission,
        addRoleRef,
        assignMenuRef
    }
}