function f1(a2, a3, a4) {
    const o5 = {
    };
    const v6 = o5.constructor;
    try { new v6(-1000000000000.0); } catch (e) {}
}
for (let v8 = 0; v8 < 10; v8++) {
    f1();
}
gc();
