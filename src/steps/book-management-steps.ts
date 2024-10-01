import { Then, When } from "@wdio/cucumber-framework"
import supertest from "supertest"
import { deleteRequest, getRequest, postRequest, putRequest } from "../support/apiCalls"
import { addBook } from "../support/apiObjects"

export interface apiObj{
    storedValue?:{}
}

When('I make a GET request to retrieve all books {string}', async(url:string)=>{
    
    apiResponse= await getRequest('/'+url)
    
})

When('I make a GET request to retrieve a book by its {int}', async(id:number)=>{
    
    apiResponse= await getRequest('/books/'+id)
    
})

When('I make a POST request to add a book with {int},{string},{string},{int},{string}', async function (this:apiObj,id:number,title:string,description:string,pageCount:number,excerpt:string){
    let addBookBody= addBook(id,title,description,pageCount,excerpt)
    apiResponse= await postRequest('/books',addBookBody)
    this.storedValue=addBookBody
    
})

When('The response body matches the request body', async function(this:apiObj){
    expect(apiResponse.body).toEqual(this.storedValue)
})

When('I make a PUT request to update a book by its {int} with {string},{string},{int},{string}', async function(this:apiObj,id:number,title:string,description:string,pageCount:number,excerpt:string){
    let updateBookBody= addBook(id,title,description,pageCount,excerpt)
    apiResponse= await putRequest('/books/'+id,updateBookBody)
    this.storedValue=updateBookBody
    
})

When('I make a Delete request to delete a book by its {int}', async function(id:number){
    apiResponse= await deleteRequest('/books/'+id)
})

Then('I receive {int} status code', async(code:number)=>{
    expect(apiResponse?.statusCode).toBe(code)
})

