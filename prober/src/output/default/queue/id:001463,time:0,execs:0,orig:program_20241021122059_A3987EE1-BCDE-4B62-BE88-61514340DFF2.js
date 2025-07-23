function f0() {
}
const v3 = new Uint8ClampedArray(127);
Object.defineProperty(v3, 10, { writable: true, value: f0 });
const v6 = new Set();
const v8 = v6.union(v6).entries();
class C9 {
    2359 = v8;
}
const v10 = new C9();
const v11 = new Set();
async function f12(a13, a14, a15) {
    const o16 = {
    };
    const v18 = new Proxy(v10, o16);
    await v18;
    return v11;
}
f12();
gc();
