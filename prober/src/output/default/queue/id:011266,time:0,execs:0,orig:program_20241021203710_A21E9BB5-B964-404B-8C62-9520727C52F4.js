function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
let v5 = JSON.stringify(JSON, JSON, F0);
function f6() {
    return arguments;
}
f6();
const v9 = [v3,v2];
let v10 = f6();
[v5,v10] = v9;
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
const v23 = new Float64Array(110);
for (const v24 of v23) {
    for (let v25 = 0; v25 < 5; v25++) {
    }
}
gc();
