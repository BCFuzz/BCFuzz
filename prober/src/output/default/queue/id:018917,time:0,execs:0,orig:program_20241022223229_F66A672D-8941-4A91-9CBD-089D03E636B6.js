class C0 {
}
const v1 = new C0();
function f3() {
    const v6 = [1000000000000.0];
    return Reflect.apply(Number.isFinite, v1, v6);
}
const v11 = new Uint32Array(4046);
v11.reduce(f3);
gc();
