function f0(a1, a2) {
    return a1;
}
class C3 {
}
const v4 = new C3();
v4?.constructor;
function f6() {
    return v4;
}
Object.defineProperty(Uint8Array, "toString", { writable: true, configurable: true, value: f6 });
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
for (let v18 = 0; v18 < 5; v18++) {
    for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
    }
    Uint8Array.toString(f6, f6);
    const o30 = {
    };
    const v31 = o30.constructor;
    try { v31.keys(f0); } catch (e) {}
}
for (let v33 = 0; v33 < 250; v33++) {
}
gc();
