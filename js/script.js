var userName = "hey";

$(window).on("load", setup);

			// Spacebrew Object
			var sb
				, app_name = "johnTheVirgin"
				;

			/**
			* setup Function that connect to spacebrew and creates a listener for clicks of the submit button.
			*/
			function setup (){
				var random_id = "0000" + Math.floor(Math.random() * 10000)
					;

				app_name = app_name + ' ' + random_id.substring(random_id.length-4);

				// setup spacebrew
				sb = new Spacebrew.Client();  // create spacebrew client object

				sb.name(app_name);
				sb.description("This app sends text from an HTML form."); // set the app description

		        // create the spacebrew subscription channels
				sb.addPublish("text", "string", "");	// create the publication feed
				sb.addSubscribe("text", "string");		// create the subscription feed

				// configure the publication and subscription feeds
				sb.onStringMessage = onStringMessage;		
				sb.onOpen = onOpen;

				// connect to spacbrew
				sb.connect();  

				// listen to button clicks
				$("#button").on("mousedown", onMouseDown);
			}

			/**
			 * Function that is called when Spacebrew connection is established
			 */
			function onOpen() {
				var message = "Connected as <strong>" + sb.name() + "</strong>. ";
				if (sb.name() === app_name) {
					message += "<br>You can customize this app's name in the query string by adding <strong>name=your_app_name</strong>."
				}
				$("#name").html( message );
			}

			/**
			* onMouseDown Function that is called when the submit button is pressed. It reads the
			*     text in the input box, and then sends it to spacebrew. It accepts a mouse event
			*     object, though we don't use it in this example.
			*/
			function onMouseDown (evt){
				var newString = $("#string").val();   // load text from input box
				if (newString !== "") {               // if input box is not blank
					console.log("Sending message " + newString); 
					sb.send("text", "string", userName + " " + newString);   // send string to spacebrew
					$("#string").val("");                   // clear the text box
					$("#status").text(userName + " : " + 	newString); // display the sent message in the browser         
				}
			}

			/**
			 * onStringMessage Function that is called whenever new spacebrew string messages are received.
			 *          It accepts two parameters:
			 * @param  {String} name    Holds name of the subscription feed channel
			 * @param  {String} value 	Holds value received from the subscription feed
			 */
			function onStringMessage( name, value ){
				console.log("[onBooleanMessage] boolean message received ", value);
				$("#msg_received").text(value); // display the sent message in the browser         
			}


		
function storeUserName() {

	//Console.log("Worked");
	userName = document.getElementById("username").value;
	document.getElementById("username").innerHTML = "Your username is " + userName;
	var elem = document.getElementById("container");
	elem.parentNode.removeChild(elem);

}



