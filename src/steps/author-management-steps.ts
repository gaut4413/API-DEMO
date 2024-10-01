import { Then, When } from "@wdio/cucumber-framework"
import supertest from "supertest"
import { deleteRequest, getRequest, postRequest, putRequest } from "../support/apiCalls"
import { addAuthor } from "../support/apiObjects"
import { apiObj } from "./book-management-steps"


When('I make a GET request to retrieve all authors {string}', async(url:string)=>{
    
    apiResponse= await getRequest('/'+url)
    
})

When('I make a GET request to retrieve a author by its {int}', async(id:number)=>{
    
    apiResponse= await getRequest('/authors/'+id)
    
})

When('I make a POST request to add a author with {int},{int},{string},{string}', async function (this:apiObj,id:number,idBook:number,fName:string,lName:string){
    let addauthorBody= addAuthor(id,idBook,fName,lName)
    apiResponse= await postRequest('/authors',addauthorBody)
    this.storedValue=addauthorBody
    
})

When('I make a PUT request to update a author by its {int} with {int},{string},{string}', async function(this:apiObj,id:number,idBook:number,fName:string,lName:string){
    let updateauthorBody= addAuthor(id,idBook,fName,lName)
    apiResponse= await putRequest('/authors/'+id,updateauthorBody)
    this.storedValue=updateauthorBody
    
})

When('I make a Delete request to delete a author by its {int}', async function(id:number){
    apiResponse= await deleteRequest('/authors/'+id)
})


