const v0 = /S\p{Nd}/mdygs;
const v1 = /a(?=bbb|bb)c/mdyvi;
const v3 = new Int32Array();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(v0, v3); } catch (e) {}
    this.c = Int32Array;
    this.g = a7;
    this.d = v1;
}
new F4();
const v11 = new F4();
function f13(a14, a15) {
    a14.replaceAll();
    return v11;
}
Int8Array[Symbol.search] = f13;
("valueOf").search(Int8Array);
gc();
