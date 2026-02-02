var header =
     '<div class="row"> <!-- row 1 -->' +
     '<div class="six columns">' +
	 '<img src="logo.jpg" class="img-circle" height="30%" width="30%" >' +
	  '<h5>Course Software Testing &amp; Verification 2024/25</h5>' +
      '</div>' +
      '<div id="nav" class="six columns">' +
      '  <a mystyle="navbutton2" href="javascript:history.go(0)">refresh</a>' +
      '</div>' +
    '</div> <!-- row 1 -->'
    +
    '<div class="row"> <!-- row 2 -->' +
      '  <div class="twelve columns">' +
      '  <a class="button" href="index.html">news</a> &nbsp; ' +
      '  <a class="button" href="plan.html">course plan</a> &nbsp; ' +
      '  <a class="button" href="https://osiris-student.uu.nl/onderwijscatalogus/extern/cursus?cursuscode=INFOB3STV&collegejaar=2024">course info @osiris</a>  &nbsp;' +
      '  <a class="button" href="material.html">Materials</a>' +
      '  <a class="button" href="https://cs.gmu.edu/~offutt/softwaretest/">IST book site</a>' +
      '  <a class="button" href="https://www.cprover.org/cbmc/">CBMC</a>' +

// well rie4fun has been taken off-line :|, codeplex too.
//      '  <a class="button" href="http://specsharp.codeplex.com/">Spec#</a>' +
//      '  <a class="button" href="http://rise4fun.com/">rise4fun</a>'
	  '  </div>' +
    '</div> <!-- row 2 -->'
    ;

    document.getElementById("fixheader").innerHTML = header ;
