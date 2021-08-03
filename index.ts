// Import stylesheets
import './style.css';
const ez1 = ['1', '2', '3', '4'];
const ez2 = ['0', ...ez1];
const hard = ['5', '6', '7', '8', '9'];

function checkApelity(level: string, digits: number) {
  let generateNum = [''];
  if (level == 'ez') {
    if (digits == 1) {
      generateNum = ez1;
    } else if (digits == 2) {
      let merged = ez1.map(f => ez2.map(s => f + s));
      generateNum = merged.flat();
    } else if (digits == 3) {
      let merged = ez1.map(f => ez2.map(s => ez2.map(th => f + s + th)));
      generateNum = merged.flat();
    }
  } else if (level == 'med') {
    if (digits == 1) {
      generateNum = ez1;
    } else if (digits == 2) {
      let merged = hard.map(f => ez2.map(s => f + s));
      generateNum = merged.flat();
    } else if (digits == 3) {
      let merged = hard.map(f => ez2.map(s => hard.map(th => f + s + th)));
      generateNum = merged.flat();
    }
  } else if (level == 'hard') {
    if (digits == 1) {
      generateNum = hard;
    } else if (digits == 2) {
      let merged = hard.map(f => hard.map(s => f + s));
      generateNum = merged.flat();
    } else if (digits == 3) {
      let merged = hard.map(f => ez2.map(s => ez2.map(th => f + s + th)));
      generateNum = merged.flat();
    }
  }
}
let generateNum = [''];
let merged = ez1.map(f => ez2.map(s => ez2.map(th => f + s + th))).flat();
const mm = merged.flat();
console.log(mm);
//console.log(merged.flat());
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
