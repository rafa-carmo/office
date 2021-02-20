module.exports = {
    createdAt(parent) {
        if (parent.createdAt){
        const dateTime = new Date(parent.createdAt).toLocaleString(process.env.LOCAL_LANGUAGE,{timeZone: process.env.TZ})
        return dateTime}
        else { 
            return null
        }
    },
    closedAt(parent) {
        console.log(parent)
        if(parent.closedAt){
            const dateTime = new Date(parent.closedAt).toLocaleString(process.env.LOCAL_LANGUAGE,{timeZone: process.env.TZ})
            return dateTime
        }
        else {
             return null
            }
        
    }
}