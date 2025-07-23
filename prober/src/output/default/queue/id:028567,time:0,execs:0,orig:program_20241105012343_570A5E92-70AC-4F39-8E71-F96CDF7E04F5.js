function f1(a2, a3, a4, a5) {
    try { a2(BigUint64Array); } catch (e) {}
    for (let v7 = 0; v7 < 5; v7++) {
        const v8 = a2.__proto__;
        function f9(a10) {
            return f1;
        }
        Object.defineProperty(v8, "e", { configurable: true, enumerable: true, set: f9 });
    }
    return a5;
}
for (let v11 = 0; v11 < 25; v11++) {
    f1(f1);
}
for (let i15 = -3, i16 = 10; i15 < i16; i16--) {
}
const v24 = new Float64Array();
const v26 = v24["subarray"]();
v26.slice(Float64Array, f1, BigUint64Array, v26, v26);
gc();
