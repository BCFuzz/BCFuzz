for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
let v10 = Float64Array;
let v11 = 8;
let v12 = "source";
[v10,v11,v12] = v12;
const v13 = `
    do {
        [ensureArrayStorage];
    } while (0 < 6)
`;
const v19 = v13.split(v11);
const v20 = [2.0,-4.0];
function f21(a22, a23, a24) {
    return a23;
}
const v25 = f21();
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    try { a31.constructor(v19, a28); } catch (e) {}
}
new F26(v20, f21, v25, F26);
gc();
