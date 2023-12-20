
window.onload = (event) => {
  console.log("page is fully loaded");
  
  // Get vanille terminal
  let vt = document.getElementById('vanilla-terminal');
  
  // TODO Logo
  let logo = {};
  logo.escapeCharacter = "\u001b"; 
  
  // Text
  let terminalRow = `rayit@terminal ~ $ ​`;
  let blink = "_";
  let output = "";
  let cursor = "";
  
  let bl = 1;
  setInterval(function() {
	if (bl == 1) {
		output += blink;
		bl = 0;
	} else {
		output = output.replace(blink, "");
		bl = 1;
	}
	vt.innerHTML = output;
  }, 500);  
  
  
	// Get input
	// add a | for input.. should shift
	let cmd = "";
	document.addEventListener("keyup", (e) => {
		console.log(`Key "${e.key}" released [event: keyup]`);
		
		// Special keys overhere..
		if ( e.key == "Enter" ) {
			console.log('Enter pressed, cmd: ', cmd);
			
			switch(cmd) {
				case "help":
					output += "<br />HELP!!!!!! <br />";
					break;
				default:
					output += "<br /> Unknown command. Please type help <br />";
			}
			cmd = "";
			
		} else if(  e.key == "Shift" || 
					e.key == "Tab" 	 ||
					e.key == "Home"  ||
					e.key == "End"	 ||
					e.key == "Delete"
					) {
			// TODO
		} else if ( e.key == "Backspace" ) {
			cmd = cmd.slice(0, cmd.length -1);
			output = output.slice(0, output.length -1);
		} else {
			// Default part
			cmd += e.key;
			output += e.key;
		}
	});
};
