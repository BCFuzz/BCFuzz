function f0(a1, a2, a3) {
    const o4 = {
    };
    const v5 = o4.constructor;
    try { v5.toString(v5); } catch (e) {}
    v5();
    return f0;
}
for (let v8 = 0; v8 < 10; v8++) {
    f0();
}
gc();
