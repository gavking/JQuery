/*All jQuery code you write will be wrapped in the
"documemt ready" code. jQuery will detectthis state of readiness
so that code included inside this function will only
run once the DOM is ready for JavaScript code to execute.
Even if in some cases JavaScript won't be loaded until
elements are rendered, including this block is
considered to be best practice.
*/

$(document).ready(function(){
    // all custom jquery will go inside here

    //Add/Replace Content inside existing tags
    $("#addContentBtn").click(function(){
      $("#addContentText").html("We added this content inside an existing &lt;p&gt; tag!");
    });
    $("#replaceContentBtn").click(function(){
      $("#addContentText").html("We then replaced it with this!");
    });

    //Remove/Replace a DOM Element
    $("#replaceElementBtn").click(function(){
      $("#addElementText").replaceWith("<p id=\"newElementText\">We added a different element with a new ID which <strong>cannot</strong> be targeted by the remove. The original element can be removed. Reload page to try it!</p>");
    });
    $("#removeElementBtn").click(function(){
      $("#addElementText").remove();
    });

    //Hide/Show/Toggle Content
    $("#hidebtn").click(function(){
      $("#textToHide").hide();
    });
    $("#showbtn").click(function(){
      $("#textToHide").show();
    });
    $("#togglebtn").click(function(){
      $("#textToHide").toggle();
    });

    //Modify Content
    $("#appendButton").click(function(){
      $("#modifyContentText").append("...I go at the end!").css("color", "red");
      $(this).prop("disabled", true);
    });
    $("#prependButton").click(function(){
      $("#modifyContentText").prepend("I go at the begninning! ").css("color", "green");
      $(this).prop("disabled", true);
    });
    $("#addBeforeButton").click(function(){
      $("#modifyContentText").before("<p id='before_p'>New paragraph before</p>");
      $(this).prop("disabled", true);
    });
    $("#addAfterButton").click(function(){
      $("#modifyContentText").after("<p id='after_p'>New paragraph after</p>");
      $(this).prop("disabled", true);
    });

    //Hover
    $("#hovertext").hover(function(){
      $("#p6").toggle();
    });

    //Display an Overlay
    $(document).ready(function() {
        $(".trigger").click(function() {
            /*Get the button text and switch on it so we can use
              same click event for all 3 buttons and close button
              in the overlay*/
            switch($(this).html()){
              case "Toggle":
                $(".overlay").toggle();
                $("#overlayText").html("This is a Toggled Overlay");
                break;
              case "Fade":
                $(".overlay").fadeToggle();
                $("#overlayText").html("This is a Fade Overlay");
                break;
              case "Slide":
                $(".overlay").slideToggle();
                $("#overlayText").html("This is a Slide Overlay");
                break;
              case "Close":
                $(".overlay").toggle();
                break;
              default:
                alert("Whoops something went wrong!");
            };
        });
    });

    //Style Content
    $("#styleContentBtn").click(function(){
      $("#styleContentText").css("color", "red");
      $("#styleContentText").css("font-weight", "bold");
    });

    //Toggle Style Class
    $("#styleClassBtn").click(function(){
      $("#styleClassText").toggleClass("toggleStyleActive");
    });

    //Target HTML tags
    $("#targetTagBtn").click(function(){
      $("h2").toggleClass("toggleStyleActive");
    });

    //Target specific elements
    $("#targetSubelementBtn").click(function(){
      //target anything within a p tag inside element with ID of subelement
      $("#subelement p").toggleClass("toggleStyleActive");
      //target anchor tags that appear after an em tag
      $("em + a").toggleClass("toggleStyleActive2");
      //target all children of an element e.g. all strong tags after a p tag
      $("p > strong").toggleClass("toggleStyleActive3");
      //target specific children e.g. item within a list
      $("#orderedList1 li:nth-child(2)").toggleClass("toggleStyleActive4");
      //target by tag and attribute e.g. list item that has a name attribute
      $("li[name]").toggle();
      //target input box of type text with a specific ID and add a value
      $("input[type='text']#inputTextBox").val("Added some text here!");
      //target a link with a particular string in it
      $("a[href*='google']").toggleClass("toggleStyleActive3");
      //target a link with a particular ending
      $("a[href$='zon.co.uk']").toggleClass("toggleStyleActive2");
      //target an image where alt starts with "pup", could also use for href's
      //e.g. a[href^='http://www.g'] or a[href^='mailto:']
      $("img[alt^='pup']").toggleClass("toggleStyleImage");
      //target table elements
      $("#myTable tr:first").toggleClass(("toggleStyleActive2"))
      $("#tableData tr:even").toggleClass("toggleTableStyleEven");
      $("#tableData tr:odd").toggleClass("toggleTableStyleOdd");
      $("#tableData tr:last").toggleClass("toggleStyleActive3");
    });

    //Using Contains and NOT
    $("#usingContainsBtn").click(function(){
      $("#orderedList2 li:contains(and)").toggleClass("toggleStyleActive3");
    });
    $("#usingNotBtn").click(function(){
      $("#orderedList2 li:not(:contains(and))").toggleClass("toggleStyleActive3");
    });

    //Using Has
    $("#usingHasBtn").click(function(){
      $("p:has(i)").toggleClass("toggleStyleActive3");
    });
});
