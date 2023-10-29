const promise = new Promise ((resolve, reject)=>{
    //async code

    setTimeout(()=>{
        // getting data from database

        // const student = {id:1, name: 'femi'}
        // resolve(student)

        reject(new Error("student not found"))
    }, 2000)
})

promise
.then((result)=> console.log(result))
.catch((result)=> console.log(result))


function getStudent (id){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
        console.log('getting data from database');
        resolve({name:'bob', id: id})
    },2000)
    })
    
}

getStudent(1)

function getSubjects (id){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log('getting subjects of students', id)
            resolve(['maths', 'science', 'b-tech'])
        }, 2000)
    })
}



function getMarks(subjects){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log('getting marks of', subjects)
            resolve(80)
        },3000)
    })
}

// const promise1 = getStudent(1)
//     .then((student)=> getSubjects(student.id))
//     .then((subject)=> getMarks(subject[0]))
//     .then((mark)=> console.log(mark))
//     .catch((error)=> console.log(error))


    async function displayData (){
        try{
            const student = await getStudent(1)
        const subjects = await getSubjects(student.id)
        const marks = await getMarks(subjects[0])
        console.log('mark', marks)
        }

        catch (error){
            console.log(error)
        }
        
    }

    displayData()

