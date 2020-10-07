var express = require('express');
var app = express();

var timer ={
	// SAPID : setTimeout()
	// each student has a timer function :)
};

function resetTimer(id){
	clearTimeout(timer[id]);

	timer[id]=setTimeout(function(){
		console.log("notify teacher, "+id+" is cheating!");
		//after 4 seconds notification is sent
	} , 4000);
}

app.get("/ping/:id",function(request, response){
    //SAP ID OF THE STUDENT
    var id = request.params.id;
    
    var obj = { id : id , session : "good"};

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(obj));

    //clear the old timer, and start 4 seconds again
    resetTimer(id);
    return response.send();

});
/*
	Prototype 1.0.0:

	Cheating notification:
		GET request resets the timer to 4 second ;)

		ELSE after 4 seconds of not recieving a GET
			-> notify teacher
*/


app.listen(3000, () => {
  console.log(`Ping server listening at port:3000`);
});