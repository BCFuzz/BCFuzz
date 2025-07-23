const v1 = new Uint8Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    const o5 = {
    };
    const v7 = new Proxy(v1, o5);
    try { v7.setFromBase64(); } catch (e) {}
}
F2[Symbol.toPrimitive] = f4;
F2 < 10;
gc();
