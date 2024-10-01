import supertest from "supertest";
import { config } from "../../wdio.conf";


export const getRequest= async function(url:string):Promise<supertest.Response>{
    const request= supertest(config.baseUrl)
    const response= await request.get(url)
    return response
}

export const postRequest= async function(url:string,input):Promise<supertest.Response>{
    const request= supertest(config.baseUrl)
    const response= await request.post(url).send(input)
    return response
}

export const putRequest= async function(url:string,input):Promise<supertest.Response>{
    const request= supertest(config.baseUrl)
    const response= await request.put(url).send(input)
    return response
}

export const deleteRequest= async function(url:string):Promise<supertest.Response>{
    const request= supertest(config.baseUrl)
    const response= await request.delete(url)
    return response
}