class C0 {
}
const v1 = new C0();
const v4 = new SharedArrayBuffer();
const v7 = `
    switch (true) {
        case v4:
            break;
        case 56:
            ArrayBuffer(8);
            break;
    }
    /\u{12345}/myvis;
`;
const v12 = v7.split(8);
function f13(a14, a15, a16) {
    return a15;
}
const v17 = f13(SharedArrayBuffer, f13, 8);
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    try { a23.constructor(v12); } catch (e) {}
}
new F18(v1, f13, v17, F18);
gc();
