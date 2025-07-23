const v1 = new WeakSet();
const v2 = v1.has();
const v6 = `
    switch (true) {
        case v2:
            break;
        case Int32Array:
            const v8 = Uint8ClampedArray();
            Uint32Array(v8, Uint8ClampedArray, v8);
            break;
    }
`;
const v11 = v6.split(8);
const v12 = [2.0,-4.0];
function f13(a14, a15, a16) {
    return f13;
}
const v17 = f13();
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    try { a23.constructor(v11); } catch (e) {}
}
new F18(v12, f13, v17, F18);
gc();
