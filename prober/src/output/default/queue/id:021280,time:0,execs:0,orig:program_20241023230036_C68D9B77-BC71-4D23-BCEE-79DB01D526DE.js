const v3 = new Uint8ClampedArray(255);
for (const v4 in v3) {
    class C5 {
        o(a7) {
        }
    }
    const v8 = new C5();
    const v10 = [C5];
    Reflect.apply(v8.o, v8, v10);
}
const v14 = new Int8Array(255, 255, 255);
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
}
const v20 = new F15();
for (let i23 = -3, i24 = 10; i23 < i24; i24--) {
}
const t17 = v20.constructor;
const v32 = new t17();
Reflect.apply(Array, v14, v32);
gc();
