for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let i12 = 0, i13 = 10;
    (() => {
        for (let i16 = 0, i17 = 10; i17; i17--) {
        }
        return i12 < i13;
    })();
    i13--) {
}
function f30(a31, a32, a33, a34) {
    try { a31(BigUint64Array); } catch (e) {}
    for (let v36 = 0; v36 < 5; v36++) {
        const v37 = a31.__proto__;
        function f38(a39) {
            return f38;
        }
        Object.defineProperty(v37, "e", { configurable: true, enumerable: true, set: f38 });
    }
    return a34;
}
for (let v40 = 0; v40 < 25; v40++) {
    f30(f30);
}
for (let i44 = -3, i45 = 10;
    (() => {
        for (let i48 = 0, i49 = 10; i48 !== i49; i49--) {
        }
        return i44 < i45;
    })();
    i45--) {
}
const v63 = new Int32Array();
v63.subarray();
gc();
