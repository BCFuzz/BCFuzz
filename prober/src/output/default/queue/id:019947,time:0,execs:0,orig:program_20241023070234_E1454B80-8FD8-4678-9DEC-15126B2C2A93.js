function f0(a1, a2) {
    a2[0] = a1;
    return a1;
}
function f3() {
    return ("-1").toLocaleLowerCase(f3, "-1", "-1", "-1");
}
f0[Symbol.toPrimitive] = f3;
f0(f0, f0);
try { new BigInt64Array(f0); } catch (e) {}
gc();
