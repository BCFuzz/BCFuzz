const v0 = /foo|(bar|baz)|quux/mdyvgis;
const v1 = /c\1(a)*/mvgi;
const v2 = /P[\ca]/ys;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.__defineSetter__;
    const v8 = a6.toString;
    try { new v8(); } catch (e) {}
}
new F3(v2, v2);
const v11 = new F3(v0, v1);
class C14 {
}
const v15 = new C14(Uint16Array);
function f16(a17, a18, a19) {
    const v22 = gc.toString;
    try { new v22(); } catch (e) {}
    gc.apply(v15, arguments);
}
const v27 = new Uint32Array(2471, v11, Uint16Array);
f16(BigInt64Array, ...v27.copyWithin(), 209);
gc();
