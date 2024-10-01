

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