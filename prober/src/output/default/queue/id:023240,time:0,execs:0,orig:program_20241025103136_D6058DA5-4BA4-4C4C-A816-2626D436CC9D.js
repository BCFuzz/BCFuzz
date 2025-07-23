for (let i2 = 0, i3 = 10;
    (() => {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        const v16 = new Uint8ClampedArray(255);
        for (const v17 in v16) {
            const o18 = {
            };
            function f19() {
                return o18;
            }
            function f20(a21) {
                const o24 = {
                    "maxByteLength": 256,
                };
                const v26 = new SharedArrayBuffer(5, o24);
                v26.grow(256);
                const v29 = new DataView(v26);
                v29.setInt8(5, 5);
                return 256;
            }
            Object.defineProperty(o18, "a", { configurable: true, enumerable: true, get: f19, set: f20 });
            o18.a = v17;
        }
        return i3;
    })();
    i3--) {
}
gc();
