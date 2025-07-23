for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v22 = new Uint8ClampedArray(255);
for (const v23 in v22) {
    const o24 = {
    };
    function f25() {
        return o24;
    }
    function f26(a27) {
        const v30 = [255,255,255,255];
        function f31(a32, a33, a34) {
            const v36 = new ArrayBuffer();
            new Uint32Array(v36);
            return a33.replace("undefined", a33);
        }
        f31(v30, "global");
        return f26;
    }
    Object.defineProperty(o24, "a", { configurable: true, enumerable: true, get: f25, set: f26 });
    o24.a = v23;
}
gc();
