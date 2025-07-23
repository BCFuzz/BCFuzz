class C1 {
}
const v2 = new C1();
const o5 = {
};
function f6(a7, a8, a9, a10) {
    const o11 = {
        [a7]: a10,
    };
    return o11;
}
const v14 = f6("string", f6(), "a", o5)["string"];
function f15() {
    return o5;
}
function f16(a17) {
    (BigUint64Array >= v2 ? v14 : v2) > f15;
    for (let v21 = 0; v21 < 1775; v21++) {
    }
}
Object.defineProperty(v14, "length", { enumerable: true, get: f15, set: f16 });
v14.length = 2;
gc();
