function f0(a1) {
    return a1;
}
const v3 = new Uint32Array(Uint32Array, f0, f0);
function f4() {
    return f0;
}
function f5(a6) {
    return v3;
}
Object.defineProperty(v3, "get", { configurable: true, enumerable: true, get: f4, set: f5 });
class C7 {
}
const v8 = new C7();
async function f9(a10, a11, a12) {
    const v14 = new Proxy(v8, v3);
    const v16 = (await v14).constructor;
    try { v16(); } catch (e) {}
}
f9();
gc();
