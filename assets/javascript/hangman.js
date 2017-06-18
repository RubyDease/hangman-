//begining of js file

availableLetters = "abcdefghijklmnopqrstuvwxyz";	
var cities = ['paris','rome', 'london', 'dublin', 'tokyo'];
//cities.length = 5;
lettersGuessed = lettersMatched = '';
numLettersMatched = 0;
var count =0;
//ramdom array

var randomCities = cities[Math.floor(Math.random() * cities.length)];
var s = "";  //string

//empty array to store guesses
var answerArray =[];
// all outputs blank


//filling arrays with underscores 

function startGame()
		{
		 

        ///game starts here, computer chose a ramdom letter and show the number of letters contained buy the number of undescore characters
		 for ( var i = 0; i < randomCities.length; i++) 
			{
	         answerArray[i] = "_";
			}

			//put them in string
				s = answerArray.join(" ");
				document.getElementById("answer").innerHTML = s;

			}

			function letter ()
			{
			   // letter that user type in the box
			    var letter = document.getElementById("letter").value;

			    	if (letter.length>0)
			    	{
			    		for (var i=0; i<randomCities.length; i++)
			    		{
			    			if(randomCities[i] === letter)
			    			{
			    				answerArray[i] = letter
			    			}
			    			
			    		}

			    		document.getElementById("stat").append(letter); 
						
						console.log(letter)	

		    		count++;
			    		document.getElementById("counter").innerHTML = " number of clicks: " + count;

			    		document.getElementById("answer").innerHTML = answerArray.join(" ");
			    	}
			    	
			    // after 5 trials message will apear at the bottom replacing the guessed letters	

			    	if (count > 5 )
			    	{
			    		document.getElementById("stat").innerHTML = " C'moon , you should have guessed by now!"

			    	}
			    		document.getElementById("letter").value = "";
			}





