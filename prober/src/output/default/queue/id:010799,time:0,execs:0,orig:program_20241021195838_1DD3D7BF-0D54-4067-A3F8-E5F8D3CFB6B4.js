function f1(a2) {
    return BigInt;
}
BigInt.toString = f1;
const o3 = {
    "apply": BigInt,
};
const v5 = new Proxy(BigInt, o3);
try { v5(v5, o3, v5); } catch (e) {}
gc();
