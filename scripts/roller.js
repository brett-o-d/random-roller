Hooks.on("ready", function() {
  setTimeout(RollSomeDice, Math.floor((Math.random() * 1200000) + 1));
});

function RollSomeDice(){
    // Attack with advantage!
    let r = new Roll("1d20");

    // The parsed terms of the roll formula
    console.log(r.terms);    // [Die, OperatorTerm, NumericTerm, OperatorTerm, NumericTerm]

    // Execute the roll
    var result = r.evaluate();

    //display the dice
    result.toMessage();

    // The resulting equation after it was rolled
    console.log(r.result);   // 16 + 2 + 4

    // The total resulting from the roll
    console.log(r.total);    // 22

    setTimeout(RollSomeDice, Math.floor((Math.random() * 1200000) + 1));
};