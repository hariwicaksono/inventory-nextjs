import Axios from 'axios'

const RootPath = "http://localhost/inventory-server/api/"
// Authorization
// key = inv1122
// Gunakan https://www.base64decode.org untuk melakukan encode key diatas menjadi format base64

var key = new Buffer.from('aW52MTEyMg==', 'base64')
const ApiKey = key.toString();

const GET = (path) => {
    const promise = new Promise((resolve,reject)=>{
        Axios.get(RootPath+path, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err)
        })
    })
    return promise
}

const GET_ID = (path,id) => {
    const promise = new Promise((resolve,reject)=>{
        Axios.get(RootPath+path+id, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err)
        })
    })
    return promise
}

const POST = (path,data) =>{
   const promise = new Promise((resolve,reject)=>{
        Axios.post(RootPath+path,data, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err)
        })
   })
   return promise
}


 const PUT = (path,data) =>{
    const promise = new Promise((resolve,reject)=>{
         Axios.put(RootPath+path,data, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
             resolve(res.data)
         },err=>{
             reject(err)
         })
    })
    return promise
 }

 const DELETE = (path,id) => {
    const promise = new Promise((resolve,reject) => {
        Axios.delete(RoothPath+path+id, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res =>{
            resolve(res.data)
        },(err)=>{
            reject(err)
        })
    })
    return promise
}

const POSTIMAGE = (path,data,name) => {
     const promise = new Promise((resolve,reject)=>{
         const formdata = new FormData()
         formdata.append('foto',data,name)
         Axios.post(RootPath+path,formdata, {
            headers: {
           'X-API-KEY': `${ApiKey}`
          },
          }).then(res=>{
            resolve(res.data.status)
        },(err)=>{
            reject(err)
        })
     })
     return promise
 }


const PostLogin = (data) => POST('login',data)




const API = {
    PostLogin
}

export default API