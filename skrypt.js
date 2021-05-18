function obliczsile()
        {
            var x=Number(document.getElementById("masa").value);
            var y=Number(document.getElementById("przysp").value);
            if(x<0 || y<0) document.getElementById("wynik").innerHTML="Błąd! Wartości nie mogą być ujemne!";
            else document.getElementById("wynik").innerHTML=x*y+" N";
            
        }
function obliczgest()
        {
            var x=Number(document.getElementById("waga").value);
            var y=Number(document.getElementById("obj").value);
            if(x<0 || y<0) document.getElementById("wynik").innerHTML="Błąd!";
            else document.getElementById("wynik").innerHTML=x/y+" kg/m^3";
            
        }
function obliczhz()
        {
            var x=Number(document.getElementById("n").value);
            var y=Number(document.getElementById("czas").value);
            if(x<0 || y<0) document.getElementById("wynik").innerHTML="Błąd!";
            if(x>y) document.getElementById("wynik").innerHTML=x/y+" Hz";
            if(x<y) document.getElementById("wynik").innerHTML=x+"/"+y+" Hz  = "+x/y+" Hz";
            
        }