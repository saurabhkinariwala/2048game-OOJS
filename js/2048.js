$( document ).ready(function() {
  "use strict";
  
  var red = $(".gameCell");
  var scoreCell = document.getElementById('score');
  var gameOver = false;
  
  var Game = function(){

  	var row = 4, column = 4;
  	var score = 0;
  	var gameMat = new Array(row);
		for ( var i=0; i < column; i++)
    		gameMat[i] = new Array(column);

    	for(var i=0;i<row;i++){
			for(var j=0;j<column;j++){
				gameMat[i][j] = 0; 
			}
		}

// -------------------------------------------------------------------------------------------

		this.ranVal = function(){
			var flag = g.ifGameOver();
			if(!gameOver){
				var r1 = Math.round(Math.random()*3);
				var r2 = Math.round(Math.random()*3);
				if( gameMat[r1][r2] == 0 ){
					gameMat[r1][r2] = 2;
				}
				else{
					g.ranVal();
				}
			}
		}
// ------------------------------------------------------------------------------------------------

$( document ).keydown(function(event) {
	if(!gameOver){
		switch(event.keyCode){
					case 37: //alert("left key");
					{

						for(var i=0;i<row;i++){
							for(var j=0;j<column;j++){
								if(gameMat[i][j] == 0){
									var posOfZero = j ;
									for(var x = j+1 ; x < column ; x++ ){
										if(gameMat[i][x] != 0 ){
											gameMat[i][posOfZero] = gameMat[i][x];
											gameMat[i][x] = 0;
											break;
										}
									}
								}
							}
						}
						for(var i=0;i<row;i++){
							for(var j=0;j<column-1;j++){
								if(gameMat[i][j] == gameMat[i][j+1]){
									gameMat[i][j] *= 2;
									score += gameMat[i][j+1];
									gameMat[i][j+1] = 0;
								}
							}
						}
						for(var i=0;i<row;i++){
							for(var j=0;j<column;j++){
								if(gameMat[i][j] == 0){
									var posOfZero = j ;
									for(var x = j+1 ; x < column ; x++ ){
										if(gameMat[i][x] != 0 ){
											gameMat[i][posOfZero] = gameMat[i][x];
											gameMat[i][x] = 0;
											break;
										}
									}
								}
							}
						}
						g.ranVal();
						//
						g.redemption();
					}
					break;
	                case 38://alert("top key");
	                {
	                	for(var i=0 ; i<column ; i++ ){
						for(var j=0 ; j<row ; j++ ){
							if(gameMat[j][i] == 0){
								var posOfZero = j ;
								for(var x = j+1 ; x < row ; x++ ){
									if(gameMat[x][i] != 0 ){
										gameMat[posOfZero][i] = gameMat[x][i];
										gameMat[x][i] = 0;
										break;
									}
								}
							}
						}
					}
						for(var i=0 ; i<column ; i++ ){
							for( var j=0 ; j < row-1 ; j++ ){
								if(gameMat[j][i] == gameMat[j+1][i]){
									gameMat[j][i] *= 2;
									score += gameMat[j+1][i];
									gameMat[j+1][i] = 0;
								}
							}
						}
						for(var i=0 ; i<column ; i++ ){
						for(var j=0 ; j<row ; j++ ){
							if(gameMat[j][i] == 0){
								var posOfZero = j ;
								for(var x = j+1 ; x < row ; x++ ){
									if(gameMat[x][i] != 0 ){
										gameMat[posOfZero][i] = gameMat[x][i];
										gameMat[x][i] = 0;
										break;
									}
								}
							}
						}
					}
						g.ranVal();
						//
						g.redemption();
	                }
	                break;
	                case 39://Right Key
	                {
	                	for(var i=0;i<row;i++){
						for(var j=column-1 ; j>=0 ; j-- ){
							if(gameMat[i][j] == 0){
								var posOfZero = j ;
								for(var x = j-1 ; x >= 0 ; x-- ){
									if(gameMat[i][x] != 0 ){
										gameMat[i][posOfZero] = gameMat[i][x];
										gameMat[i][x] = 0;
										break;
									}
								}
							}
						}
					}
	
						for(var i=0;i<row;i++){
							for(var j=column-1 ; j>0 ; j-- ){
								if(gameMat[i][j] == gameMat[i][j-1]){
									gameMat[i][j] *= 2;
									score += gameMat[i][j-1];
									gameMat[i][j-1] = 0;
								}
							}
						}
						for(var i=0;i<row;i++){
						for(var j=column-1 ; j>=0 ; j-- ){
							if(gameMat[i][j] == 0){
								var posOfZero = j ;
								for(var x = j-1 ; x >= 0 ; x-- ){
									if(gameMat[i][x] != 0 ){
										gameMat[i][posOfZero] = gameMat[i][x];
										gameMat[i][x] = 0;
										break;
									}
								}
							}
						}
					}
	
						g.ranVal();
						//
						g.redemption();
	                }
	                    break;
	                case 40://alert("bottom key ");
	                {
						for(var i=0 ; i<column ; i++ ){
						for(var j=row-1 ; j>=0 ; j-- ){
							if(gameMat[j][i] == 0){
								var posOfZero = j ;
								for(var x = j-1 ; x >= 0 ; x-- ){
									if(gameMat[x][i] != 0 ){
										gameMat[posOfZero][i] = gameMat[x][i];
										gameMat[x][i] = 0;
										break;
									}
								}
							}
						}
					}
						for(var i=0 ; i<column ; i++ ){
							for( var j=row-1 ; j>0 ; j-- ){
								if(gameMat[j][i] == gameMat[j-1][i]){
									gameMat[j][i] *= 2;
									score += gameMat[j-1][i];
									gameMat[j-1][i] = 0;
								}
							}
						}
						for(var i=0 ; i<column ; i++ ){
						for(var j=row-1 ; j>=0 ; j-- ){
							if(gameMat[j][i] == 0){
								var posOfZero = j ;
								for(var x = j-1 ; x >= 0 ; x-- ){
									if(gameMat[x][i] != 0 ){
										gameMat[posOfZero][i] = gameMat[x][i];
										gameMat[x][i] = 0;
										break;
									}
								}
							}
						}
					}
						g.ranVal();
						//
						g.redemption();
					
	                }
	                	break;
	                default:console.log("wrong key pressed");
	                   	break;    
			}
		}
  	});
	this.shiftLeft = function(){
		for(var i=0;i<row;i++){
			for(var j=0;j<column;j++){
				if(gameMat[i][j] == 0){
					var posOfZero = j ;
					for(var x = j+1 ; x < column ; x++ ){
						if(gameMat[i][x] != 0 ){
							gameMat[i][posOfZero] = gameMat[i][x];
							gameMat[i][x] = 0;
							break;
						}
					}
				}
			}
		}
	}


	this.shiftRight = function(){
		for(var i=0;i<row;i++){
			for(var j=column-1 ; j>=0 ; j-- ){
				if(gameMat[i][j] == 0){
					var posOfZero = j ;
					for(var x = j-1 ; x >= 0 ; x-- ){
						if(gameMat[i][x] != 0 ){
							gameMat[i][posOfZero] = gameMat[i][x];
							gameMat[i][x] = 0;
							break;
						}
					}
				}
			}
		}
	}

	this.showMat = function(){
		for(var i=0;i<row;i++){
			var line = "";
			for(var j=0;j<column;j++){
				line = line + "  " + gameMat[i][j];
			}
			console.log(line);
			console.log("\n..................");
		}
		console.log("_________________\n___________________");
	}


	this.ifGameOver = function(){
		var flag = true;
		for(var i = 0 ; i < row ; i++ ){
			for( var j = 0 ; j < column ; j++ ){
				if(gameMat[i][j] == 0 ){
					flag = false;
					return false;
				}
			}
		}
		if(flag == true){
			//console.log("Game Over");
			$("#gameBox").display = "none";
			$("#gameOver").display = "block";
			gameOver = true;
			return true;
		}
	}

	this.redemption = function(){
		for(var i = 0 ; i < row ; i++ ){
			for( var j = 0 ; j < column ; j++ ){
				if(gameMat[i][j] != 0 ){
					red[ (row*i) + j ].innerHTML = gameMat[i][j];
				}
				else{
					red[ (row*i) + j ].innerHTML = "";	
				}
			}
		}
		scoreCell.innerHTML = "Score : " + score;
		//console.log(score);
	}

}


  	var g= new Game();
  	g.init();
  	g.ranVal();
  	//g.showMat();
	g.redemption();
});