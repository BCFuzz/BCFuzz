for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
let v10 = Float64Array;
let v11 = 8;
let v12 = "source";
[v10,v11,v12] = v12;
const v13 = `
    do {
    } while (0 < 6)
    const v17 = \`
        /\u{12345}/myvis;
    \`;
`;
const v19 = v13.split(v11);
v19.shift();
const v21 = [2.0,-4.0];
function f22(a23, a24, a25) {
    return a25;
}
const v26 = f22();
function F27(a29, a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    try { a32.constructor(v19); } catch (e) {}
}
new F27(v21, f22, v26, F27);
gc();
