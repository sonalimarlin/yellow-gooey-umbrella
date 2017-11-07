document.getElementById("button1").onclick = testCode;
document.getElementById("link1").onclick = testMsg;
document.getElementById("loris").onclick = more;
document.getElementById("newWind").onclick = newWind;
document.getElementById("userNameForm").onsubmit = checkUserName;
document.getElementById("toggle_image").onclick = invisible;

function testMsg() {
  alert("Thanks for clicking, you're swell! Please continue exploring...");
}

function more() {
  var extPara = "Slow lorises are a group of several species of nocturnal strepsirrhine primates that make up the genus Nycticebus. Found in Southeast Asia and bordering areas, they range from Bangladesh and Northeast India in the west to the Sulu Archipelago in the Philippines in the east, and from Yunnan province in China in the north to the island of Java in the south. Although many previous classifications recognized as few as a single all-inclusive species, there are now at least eight that are considered valid: the Sunda slow loris (N. coucang), Bengal slow loris (N. bengalensis), pygmy slow loris (N. pygmaeus), Javan slow loris (N. javanicus), Philippine slow loris (N. menagensis), Bangka slow loris (N. bancanus), Bornean slow loris (N. borneanus), and Kayan River slow loris (N. kayan). The group's closest relatives are the slender lorises of southern India and Sri Lanka. Their next closest relatives are the African lorisids, the pottos, false pottos, and angwantibos. They are less closely related to the remaining lorisoids (the various types of galago), and more distantly to the lemurs of Madagascar.";
    document.getElementById("loris").innerHTML = extPara;
}
function testCode() {
  var myCities = ["Louisville", "Lafayette", "Monroe", "Bowling Green", "Cleveland", "Mumbai", "Wellington", "Boulder"];
  for (var i = 0; i < myCities.length; i++) {
    if (myCities[i] === "Boulder") {
      alert("Yes, Boulder has some great cheese!");
      alert("Have you tried Haystack's Goat Cheeses? Yum!!");
      break;
    }
  }
}
function newWind() {
  window.open("", "test");
}
function checkUserName() {
  try {
    var pass = document.getElementById("userName1").value;
    if (pass.indexOf(" ") !== -1) {
      throw "No spaces in username!";
    }
    if (pass.length < 8) {
      throw "Username must be more than 8 characters!";
    }
    if (pass.length > 10) {
      throw "Username must be less than 10 characters, please.";
    }
    var numSomewhere = false;
    for (var i = 0; i < pass.length; i++) {
      if (isNaN(pass.charAt(i)) === false) {
        numSomewhere = true;
        alert("Hello " + pass);
        break;
      }
    }
    if (numSomewhere === false) {
      throw "Username must include a number!";
    }
  }
  catch(err) {
    alert(err);
    document.getElementById("userName").focus();
    return false;
  }
}
$(document).ready(function() {
    var tgt = $("h2#slider");
    tgt.hide();
    tgt.slideDown(2000);
    $(this).click(function() {
      tgt.slideUp(2000); 
  });
});

$(document).ready(function() {
    $(".trigger").click(function() {
        $(".overlay").slideToggle();
    });
});

function invisible(){
  $("img#dramatic").toggleClass("invisible");
  if ($("button#toggle_image").text()==="Hide Image") {
    $("button#toggle_image").text("Show Image");}
    else {
      $("button#toggle_image").text("Hide Image");
    }
  }

  $(document).ready(function(){
    $("button#bgetgreeting").on("click", function (){
      var first_name = $("input#firstName").val();
      var last_name = $("input#lastName").val();
      $("h4#personalizedGreeting").text("Hello there, " + first_name + " " + last_name);
    });
  });
