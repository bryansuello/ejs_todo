//console.log(module);
//module.exports = getDate; //adding () right away calls the function
exports.getDate =  function(){
    const today = new Date();
    const currentDay = today.getDay();
    //let day = "";
    let dayName = "";
    // if (currentDay === 6 || currentDay === 0) {
    //   //res.send('happy weekend');
    //   day = "Weekend";
    //   //res.sendFile(__dirname + '/weekend.html');
    // }
    // else {
    //   day = "Weekday";
    //   //res.send('happy shitday');
    // }
      //res.render('list', {kindOfDay: day })
    (currentDay === 0) ? dayName = 'Sunday' : (currentDay === 1) ? dayName = 'Monday' : (currentDay === 2) ? dayName = 'Tuesday' : (currentDay === 3) ? dayName = 'Wednesday' : (currentDay = 4) ? dayName = 'Thursday' : (currentDay === 5) ? dayName = 'Friday' : dayName = 'Saturday';
    // should have used SWITCH, more than 5 statements lol

    //res.render('list', {kindOfDay: dayName});

    const options = {
      weekday : "long",
      day: "numeric",
      month: "long"
    }
    return today.toLocaleString('en-US', options);

}


exports.getDay = function(){
    const today = new Date();

    const options = {
      weekday : "long",
    }
    return today.toLocaleString('en-US', options);
}

console.log(module.exports);
