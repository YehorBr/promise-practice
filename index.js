
function arrayChecking (arr){
    const everyNum = arr.every((num)=>{
        return num % 2 === 0;
    })

    return new Promise((resolve, reject)=>{
        if(everyNum){
            resolve("Всі числа парні")
        }else{
            reject('Є непарні числа')
        }
    })
}

arrayChecking([2, 4, 5])
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})




