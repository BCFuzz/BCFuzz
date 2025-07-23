const v3 = `
    switch (true) {
        case Int32Array:
            const v5 = Uint8ClampedArray();
            Uint32Array(v5, Uint8ClampedArray, v5);
            break;
    }
    /\u{12345}/myvis;
`;
const v9 = v3.split(8);
const v10 = [2.0,-4.0];
function f11(a12, a13, a14) {
    return v10;
}
const v15 = f11();
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    try { a21.constructor(v9); } catch (e) {}
}
new F16(v10, f11, v15, F16);
gc();
