function f1(a2) {
    a2.length = a2;
    const o6 = {
        toString(a4, a5) {
            a5.arguments = f1;
            return a5;
        },
    };
    return o6;
}
const v7 = f1(WeakSet);
f1(v7);
try { new BigUint64Array(v7); } catch (e) {}
gc();
