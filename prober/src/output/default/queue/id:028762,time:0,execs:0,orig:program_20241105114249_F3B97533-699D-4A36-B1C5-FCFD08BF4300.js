for (let i2 = 0, i3 = 10;
    (() => {
        for (let i6 = 0, i7 = 10; i7; i7--) {
        }
        return i2 < i3;
    })();
    i3--) {
}
function f20(a21, a22, a23, a24) {
    try { a21(BigUint64Array); } catch (e) {}
    for (let v26 = 0; v26 < 5; v26++) {
        const v27 = a21.__proto__;
        function f28(a29) {
            return BigUint64Array;
        }
        Object.defineProperty(v27, "e", { configurable: true, enumerable: true, set: f28 });
    }
    return f20;
}
for (let v30 = 0; v30 < 25; v30++) {
    f20(f20);
}
for (let i34 = -3, i35 = 10;
    (() => {
        for (let i38 = 0, i39 = 10; i38 !== i39; i39--) {
        }
        return i34 < i35;
    })();
    i35--) {
}
const v53 = new Uint32Array(Uint32Array, BigUint64Array);
v53["subarray"]();
gc();
