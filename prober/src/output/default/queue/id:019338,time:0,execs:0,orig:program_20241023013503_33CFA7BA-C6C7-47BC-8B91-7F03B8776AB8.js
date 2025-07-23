class C1 {
}
const v2 = new C1();
function f3(a4, a5, a6) {
    return gc.apply(v2, arguments);
}
const v12 = new Uint32Array(2471);
f3(BigInt64Array, ...v12.copyWithin(), 209);
gc();
