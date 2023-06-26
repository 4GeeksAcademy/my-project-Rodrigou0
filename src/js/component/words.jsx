import { set } from "mobx"
//import wordBank from './wordle-bank.txt'

export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]] 

    const generateWorset =async()=>{
        let wordSet;
        await fetch(wordBank).then((response)=> response.txt()).then((result)=>{
            console.log(result);
        })
    }