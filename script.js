$("#fader").on("input",function () {
            $('#v-28').css("font-size", $(this).val() + "px");
    });

      function myFunction() {
          var x = document.getElementById("myInput").value;
          document.getElementById("v-28").innerHTML = " " + x;

        }

slider.oninput = function() {
  output.innerHTML = this.value;
	
}