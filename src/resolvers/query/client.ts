

module.exports = {
    name(parent) {

        
        if(!parent.name){

           return parent.client.name
        }
        return parent.name
    }
}