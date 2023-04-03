const { json } = require('express');
const fs = require('fs');
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');


const User ={

    file: path.join(__dirname,"../database/users.json"),

    getData: function(){
       return JSON.parse(fs.readFileSync(this.file, 'utf-8'))
    },

    generateId: function (){
        let allUsers=this.findAll();
        let lastUser=allUsers.pop();
        if(lastUser){
            return lastUser.id+1
        }
        return 1;
    },

    findAll: function(){
        return this.getData()
    },

    findbyPK: function(id){
        let allUsers=this.findAll()
        let userFind=allUsers.find(oneUser=>oneUser.id==id)
        return userFind;
    },

    findbyfield: function(field,text){
        let allUsers=this.findAll()
        let userFind=allUsers.find(oneUser=>oneUser[field]==text)
        return userFind;
    },

    create: function(userData){
        let allUsers=this.findAll()
        let newUser ={
            id:this.generateId(),
            ...userData
        }
        allUsers.push(newUser)
        fs.writeFileSync(this.file,JSON.stringify(allUsers,null, ''));
        return newUser;
        
    },

    delete: function(id){
        let allUsers=this.findAll();
        let finalUsers=allUsers.filter(user=>user.id !== id)
        fs.writeFileSync(this.file,JSON.stringify(finalUsers,null, ''));
        return true;
    }
}

module.exports=User;