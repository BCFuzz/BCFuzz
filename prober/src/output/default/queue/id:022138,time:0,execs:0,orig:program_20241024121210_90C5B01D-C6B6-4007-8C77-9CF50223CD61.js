class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5) {
    gc.apply(v1, arguments);
    return arguments;
}
let v9 = 2471;
v9--;
const v12 = new Uint32Array(v9);
f2(BigInt64Array, ...v12.copyWithin());
gc();
