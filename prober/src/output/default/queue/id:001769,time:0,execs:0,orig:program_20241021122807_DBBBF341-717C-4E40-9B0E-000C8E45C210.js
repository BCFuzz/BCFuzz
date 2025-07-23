function f0() {
}
const v2 = Date(f0);
function f3() {
    return f0;
}
const v4 = [f0,Date,f3,Date,v2];
const v7 = new Uint8Array(1944);
class C8 {
    [v4];
}
new C8();
Object.defineProperty(v7, 1, { writable: true, value: C8 });
gc();
