
class User {
    constructor(username){
        this.username=username
    }
    getUsername(){
        return this.username
    }
    setUsername(username){
        this.username=username
    }
}

class ChatUser extends User {
    constructor(username){
        super(username)
        this.count=0
    }
    giveWarning(){
        this.count++
    }
    getWarningCount(){
        return this.count
    }
}