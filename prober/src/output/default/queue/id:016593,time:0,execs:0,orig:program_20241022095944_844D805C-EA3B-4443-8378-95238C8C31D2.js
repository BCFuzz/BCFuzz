for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v11 = new Uint32Array();
for (const v12 in v11) {
}
for (let i = 0; i < 5; i++) {
    function f13(a14) {
        return a14;
    }
    Object.defineProperty(v11, "g", { configurable: true, enumerable: true, get: f13 });
}
gc();
