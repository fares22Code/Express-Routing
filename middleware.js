function checkTime(req,res,next) {
    const date = new Date()
    const day = date.getDay()
    const hour = date.getHours()

    if(day >= 1 && day <= 5  ) next()
    else res.send("hors time")

}
module.exports =  checkTime