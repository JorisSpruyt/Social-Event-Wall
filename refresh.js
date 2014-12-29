var refreshCounter = 0;
var amountInstagram = 0;
var amountTwitter = 0;
var maxAmount = 25;
 


function refresh(){

	var howOften = 5; //number often in seconds to rotate
	
	
	updateFooter();
	
	//do a refresh on first run and when the list was completed
	if (refreshCounter == 0 || refreshCounter % (maxAmount) == 0){ 
		console.log("reloading instagram pictures");
		refreshInstagram();
		console.log("reloading twitter pictures");
		refreshTwitter();
	}
	
	
	//if all Twitter and Instagram pictures are shown, restart both, else first finish either twitter or instagram list
	if(amountTwitter == 0 && amountInstagram == 0){
		amountTwitter = twitterPictures.length;
		amountInstagram = instagramPictures.length;
	}
	
	
	//switch between rotating instagram and twitter
	if(refreshCounter % 2 == 0 && amountInstagram > 0){
		console.log("going to rotate instagram picture");
		rotateInstagram();
		amountInstagram--; 
	} else if(amountTwitter > 0) {
		console.log("going to rotate twitter picture");
		rotateTweet();
		amountTwitter--;
		}else{
			console.log("going to rotate instagram picture");
			rotateInstagram();
			amountInstagram--; 
		}
	
	
	if(refreshCounter % 4 == 0){ //rotate every fourth run
		console.log("going to rotate sponsor");
		rotateSponsor();
	}
	
	refreshCounter++;
	setTimeout("refresh()",howOften*1000);
}
