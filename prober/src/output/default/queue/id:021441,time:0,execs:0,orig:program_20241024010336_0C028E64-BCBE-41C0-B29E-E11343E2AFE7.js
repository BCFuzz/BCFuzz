const o5 = {
    set c(a4) {
    },
    "b": 0.8554717229482225,
    "a": 1000000.0,
    "g": 1000000.0,
    "d": "byteOffset",
};
function f6(a7, a8) {
    const o12 = {
        toString(a10, a11) {
            return a11;
        },
        ...o5,
    };
    return o12;
}
const v15 = new Int8Array(255);
for (const v16 in v15) {
    const v18 = new WeakMap();
    v18.constructor = f6;
    class C20 extends v18.constructor {
        f = 255;
    }
    new C20();
}
for (let i24 = 10, i25 = 10; -13369 < i25; i25--) {
}
gc();
