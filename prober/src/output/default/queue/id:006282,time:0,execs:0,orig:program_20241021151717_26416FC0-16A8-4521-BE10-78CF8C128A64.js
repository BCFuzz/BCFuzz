for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v22 = new Uint8ClampedArray(255);
for (const v23 in v22) {
    const o24 = {
    };
    function f25() {
        return 255;
    }
    function f26(a27) {
        typeof a27 === "string";
    }
    Object.defineProperty(o24, "a", { configurable: true, enumerable: true, get: f25, set: f26 });
    o24.a = v23;
}
gc();
