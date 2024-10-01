

export function addBook(id:number, title:string, desc:string,pageCount:number, excerpt:string){
    let currentDate= new Date()
    let todayDate=currentDate.toISOString()
    return{
        
            "id": id,
            "title": title,
            "description": desc,
            "pageCount": pageCount,
            "excerpt": excerpt,
            "publishDate": todayDate
          
    }
}



export function addAuthor(id:number, idBook:number, firstName:string,lastName:string){

    return{
        "id": id,
        "idBook": idBook,
        "firstName": "string",
        "lastName": "string"
      
    }
}