console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins it's initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");

  setTimeout(RollSomeDice, Math.floor((Math.random() * 200000) + 1));
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

    setTimeout(RollSomeDice, Math.floor((Math.random() * 200000) + 1));
}