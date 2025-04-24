
let optaudion =1
let audioswitch
const audio = audioswitch;
function audioclicked()
			{
            
			if(optaudion == 1){
                document.getElementById("defineaudio").innerHTML ="audio off";  
                return optaudion =0, audioswitch =0;
            }
            else if(optaudion == 0){
                document.getElementById("defineaudio").innerHTML ="audio on";
                return optaudion =1,audioswitch =1;
            }
            
			}

let optsubtitled =0
let subtitleswitch
const subtitles = subtitleswitch;
function subtitleclicked()
			{
            
			if(optsubtitled == 1){
                document.getElementById("definesubtitles").innerHTML ="Subtitles off";  
                return optsubtitled =0, subtitlesswitch =0;
            }
            else if(optsubtitled == 0){
                document.getElementById("definesubtitles").innerHTML ="Subtitles on";
                return optsubtitled =1, subtitlesswitch =1;
            }
            
			}
