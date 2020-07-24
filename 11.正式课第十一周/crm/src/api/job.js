import http from "./http";
export function getJobList(){
    return http.get("/job/list")
}
export function delJobList(id){
    return http.get("/job/delete",{params:{jobId:id}})
}
export function updateJob(option){
    return http.post("/job/update",option)
}
export function addJob(option){
    return http.post("/job/add",option)
}