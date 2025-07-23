function f1(a2, a3, a4, a5) {
    try { a2(BigUint64Array); } catch (e) {}
    for (let v7 = 0; v7 < 5; v7++) {
        const v8 = a2.__proto__;
        function f9(a10) {
            return a5;
        }
        Object.defineProperty(v8, "e", { configurable: true, enumerable: true, set: f9 });
    }
    return a5;
}
for (let v11 = 0; v11 < 25; v11++) {
    f1(f1);
}
for (let i15 = -3, i16 = 10;
    i15 < i16;
    (() => {
        for (let i22 = 0, i23 = 10; i22 !== i23; i23--) {
        }
        i16--;
    })()) {
}
const v34 = new Uint8Array();
v34.subarray();
gc();
