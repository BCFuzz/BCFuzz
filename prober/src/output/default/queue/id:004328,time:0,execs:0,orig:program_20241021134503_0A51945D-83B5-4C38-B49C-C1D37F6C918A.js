const v2 = new Uint32Array(Uint8ClampedArray, Uint8ClampedArray, Uint32Array);
function f3(a4, a5, a6) {
    const o9 = {
        valueOf(a8) {
            return a8;
        },
    };
    const v10 = v2.__proto__;
    const v11 = o9.valueOf(Uint8ClampedArray);
    try { new v11(v10); } catch (e) {}
    return v10;
}
f3();
gc();
