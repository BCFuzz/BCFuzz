for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
let v10 = 8;
const v11 = v10--;
const v12 = `
    for (const v15 in Uint32Array(v11, v11)) {
    }
`;
const v16 = v12.split(v10);
const v17 = [2.0,-4.0];
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    try { a24.constructor(v16); } catch (e) {}
}
new F19(v17, v11, undefined, F19);
gc();
