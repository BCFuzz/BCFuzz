class C0 {
}
const v1 = new C0();
const t3 = v1.constructor;
const v3 = new t3();
for (let i6 = 0, i7 = 10; i6 !== i7; i7--) {
}
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
const v26 = new Uint8ClampedArray(255);
for (const v27 in v26) {
    const o28 = {
    };
    o28[8] = v3;
    function f29() {
        return v1;
    }
    function f30(a31) {
        o28[8];
        return ([128,9007199254740990,-5137,-3,5,9007199254740990,8,-46018])["every"](f29);
    }
    Object.defineProperty(o28, "a", { configurable: true, enumerable: true, get: f29, set: f30 });
    o28.a = v27;
}
gc();
