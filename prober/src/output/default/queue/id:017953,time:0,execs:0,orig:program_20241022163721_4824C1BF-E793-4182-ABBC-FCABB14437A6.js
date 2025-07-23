class C0 {
}
const v1 = new C0();
function f2() {
    return v1;
}
Object.defineProperty(f2, "omitPadding", { writable: true, configurable: true, value: v1 });
let v3 = 681;
v3--;
const v6 = new Uint8Array(v3);
function f7(a8, a9, a10, a11) {
    return a10.toBase64(f2);
}
v6.map(f7);
gc();
