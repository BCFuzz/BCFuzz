const v0 = [-4.0,2.0];
for (let i3 = 0, i4 = 10; i3 !== i4; i4--) {
}
const v13 = new Uint8ClampedArray(255);
for (const v14 in v13) {
    const o15 = {
    };
    function f16() {
        return 255;
    }
    function f17(a18) {
        const v19 = o15[6];
        let v20;
        try { v20 = v13.toLocaleString(v14); } catch (e) {}
        v0[v20] ^= a18;
        return delete v0[v19];
    }
    Object.defineProperty(o15, "a", { configurable: true, enumerable: true, get: f16, set: f17 });
    o15.a = v14;
}
gc();
