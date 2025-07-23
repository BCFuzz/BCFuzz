const v1 = new Float32Array();
const v2 = v1.indexOf;
let v3;
try { v3 = v2(); } catch (e) {}
const v5 = `
    try {
        16 < v3;
    } catch(e7) {
    }
`;
const v8 = v5.split(16);
const v9 = [2.0,-4.0];
function f10(a11, a12, a13) {
    return v3;
}
const v14 = f10();
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    try { a20.constructor(v8); } catch (e) {}
}
new F15(v9, f10, v14, F15);
gc();
