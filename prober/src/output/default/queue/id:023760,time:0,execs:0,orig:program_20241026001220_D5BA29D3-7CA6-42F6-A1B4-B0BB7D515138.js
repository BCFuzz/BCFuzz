const v0 = [-4.0,2.0];
for (let i3 = 0, i4 = 10; i3 !== i4; i4--) {
}
const v13 = new Uint8ClampedArray(255);
for (const v14 in v13) {
    const o15 = {
    };
    function f16() {
        return f16;
    }
    function f17(a18) {
        const v19 = o15[6];
        const v21 = ([-6,52932,10000,13,8,-4096]).constructor;
        const v24 = new Float32Array(3323);
        v24.reduce(v21);
        let v26;
        try { v26 = v13.toLocaleString(v14); } catch (e) {}
        v0[v26] ^= a18;
        delete v0[v19];
        return v26;
    }
    Object.defineProperty(o15, "a", { configurable: true, enumerable: true, get: f16, set: f17 });
    o15.a = v14;
}
gc();
