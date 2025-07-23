let v0 = Float64Array;
let v1 = 8;
for (let i4 = 10, i5 = 10; -13369 !== i5; i5--) {
}
let v12 = "source";
[v0,v1,v12] = v12;
const v13 = `
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
    }
`;
const v18 = v13.split(v1);
const v19 = [2.0,-4.0];
function f20(a21, a22, a23) {
    return a23;
}
const v24 = f20(v1, v19, f20);
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    try { a30.constructor(v18); } catch (e) {}
}
new F25(v19, f20, v24, F25);
gc();
