function f0() {
    return f0;
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
let v11 = Float64Array;
let v12 = 8;
for (let i15 = 10, i16 = 10; -13369 !== i16; i16--, i16--) {
    i16++;
}
let v25 = "source";
[v11,v12,v25] = v25;
const v26 = `
    for (let [i29, i30] = (() => {
            Object.defineProperty(v11, "e", { configurable: true, get: f0 });
            return [0, 10];
        })();
        i29 < i30;
        ) {
    }
    /\u{12345}/myvis;
`;
const v37 = v26.split(v12);
const v38 = [2.0,-4.0];
function f39(a40, a41, a42) {
    return a42;
}
const v43 = f39(v25, f0, f0);
function F44(a46, a47, a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    try { a49.constructor(v37); } catch (e) {}
}
new F44(v38, f39, v43, F44);
gc();
