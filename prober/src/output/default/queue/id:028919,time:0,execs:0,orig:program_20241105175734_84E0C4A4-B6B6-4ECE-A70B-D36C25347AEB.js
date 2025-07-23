function f1(a2, a3, a4, a5) {
    try { a2(BigUint64Array); } catch (e) {}
    for (let v7 = 0; v7 < 5; v7++) {
        const v8 = a2.__proto__;
        function f9(a10) {
            return a10;
        }
        Object.defineProperty(v8, "e", { configurable: true, enumerable: true, set: f9 });
    }
    return a3;
}
for (let v11 = 0; v11 < 25; v11++) {
    f1(f1);
}
const v13 = new BigUint64Array();
v13["subarray"]().slice(v13, BigUint64Array);
gc();
