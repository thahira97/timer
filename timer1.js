// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

let input = process.argv.slice(2);

for (let i = 0; i < input.length; i++) {
  if (!(input.length === 0 && input[i] < 0 && typeof input[i] !== "number")) {
    setTimeout(() => {
      process.stdout.write(".");
    }, input[i] * 1000);
  }
}
