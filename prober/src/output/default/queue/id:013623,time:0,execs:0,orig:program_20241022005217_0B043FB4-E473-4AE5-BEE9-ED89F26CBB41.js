const v0 = [];
let v1 = "symbol";
function f4(a5) {
    v1 /= a5;
    return a5;
}
Object.defineProperty(Uint16Array, "toString", { value: f4 });
function f8() {
    const o9 = {
        [BigUint64Array]: 128,
        "c": v1,
        ...v0,
    };
    const v10 = o9[8];
    v1.valueOf = v10;
    ~Uint16Array;
    o9.e = v1;
    try { v10(); } catch (e) {}
    v1.length += 0;
    return v10;
}
for (let v13 = 0; v13 < 100; v13++) {
    f8();
}
gc();
