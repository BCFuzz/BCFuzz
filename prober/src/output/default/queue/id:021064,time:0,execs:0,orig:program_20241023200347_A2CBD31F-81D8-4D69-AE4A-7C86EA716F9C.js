for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v22 = new Uint8ClampedArray(255);
for (const v23 in v22) {
    const o24 = {
    };
    function f25() {
        return Uint8ClampedArray;
    }
    function f26(a27) {
        function F28(a30, a31, a32, a33) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let v34 = 0; v34 < 5; v34++) {
            const v36 = "p" + v34;
            function F37() {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f40(a41, a42, a43, a44) {
                a42 = a44 instanceof F37;
                return v36;
            }
            f40(Uint16Array, v36, F28, F37);
        }
        return Uint8ClampedArray;
    }
    Object.defineProperty(o24, "a", { configurable: true, enumerable: true, get: f25, set: f26 });
    o24.a = v23;
}
gc();
