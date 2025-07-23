function f7(a8) {
    const o9 = {
    };
    function f11() {
        return Uint32Array;
    }
    Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f11 });
    return o9;
}
const v14 = f7(Uint32Array);
for (let v15 = 0; v15 < 500; v15++) {
    for (let v16 = 0; v16 < 5; v16++) {
        v14[14] = v15;
    }
}
gc();
