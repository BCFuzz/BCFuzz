function f0(a1, a2, a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = v4 < a3;
        for (let i = 0; i < 5; i++) {
            let v8 = "setFloat32";
            const o12 = {
                n(a10, a11) {
                    return v8 = this;
                },
            };
            this.length = 2;
        }
        f0(v5);
    }
    return f0;
}
Uint8ClampedArray.valueOf = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
