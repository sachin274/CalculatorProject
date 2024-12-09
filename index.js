var store="";

$(".row").click(function(){
    var sym = $(this).attr("class").split(" ")[1];
    var escapedSym = $.escapeSelector(sym);
    $("."+escapedSym).addClass("clicked");
    setTimeout(function(){
        $("."+escapedSym).removeClass("clicked");
    },100);
    
    if(sym === "="){
        try{
            var result=eval(store);
            $(".show").text(result);
            $(".answer").text("");
            store=result;
        }
        catch(error){
            $(".answer").text("");
            $(".show").text("Error");
            store="";
        }
    }
    else if(escapedSym==="D"){
        store=store.slice(0,-1);
        $(".show").text(store);
        $(".answer").text(eval(store));
        if(store.length==0){
            $(".answer").text("");
        }
    }
    else if(escapedSym ==="C"){
        $(".show").text("0");
        store="";
        $(".answer").text("");
    }
    else if(escapedSym!== "="){
        store+=$("."+escapedSym).text();
        $(".show").text(store);
        $(".answer").text(eval(store));
    }
})

$(".image").click(function(){
    store=store.slice(0,-1);
    $(".show").text(store);
    $(".answer").text(eval(store));
    if(store.length==0){
        $(".answer").text("");
    }
})