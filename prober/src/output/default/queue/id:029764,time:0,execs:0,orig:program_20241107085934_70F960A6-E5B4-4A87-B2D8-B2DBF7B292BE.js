function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
let v6 = new F4();
let v7 = eval;
let v8 = 8;
for (let i11 = 10, i12 = 10; -13369 !== i12; i12--) {
}
let v19 = "source";
[v7,v8,v19] = v19;
const v20 = `
    do {
        v6 = Boolean;
    } while (0 < v2)
`;
const v23 = v20.split(v8);
const v24 = [2.0,-4.0];
function f25(a26, a27, a28) {
    return v20;
}
const v29 = f25(v20, v24, F0);
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    try { a35.constructor(v23); } catch (e) {}
}
new F30(v24, f25, v29, F30);
gc();
