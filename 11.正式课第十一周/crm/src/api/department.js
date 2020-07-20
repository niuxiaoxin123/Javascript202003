import http from "./http.js";
// 删除部门列表数据
export function deleteDepartment(departmentId){
    return http.get("/department/delete",{
        params:{
            departmentId
        }
    })
}