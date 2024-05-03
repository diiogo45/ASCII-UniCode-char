function detectCharacter() {

const characterInput = document.getElementById("characterInput");
const result = document.getElementById("result");


const  character = characterInput.value;

if (isASCII(character)){

	result.innerText = "The entered character is an Ascii character";

} else{

		result.innerText =  "The entered character is an UniCode character";

}


}




function isASCII (character){

return character.charCodeAt(0) <= 127;




}