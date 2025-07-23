function f0(a1, a2, a3) {
    const o4 = {
    };
    const v5 = o4.constructor;
    v5.freeze(a3);
    try { v5.getPrototypeOf(a3); } catch (e) {}
    return a1;
}
for (let v8 = 0; v8 < 10; v8++) {
    f0();
}
gc();
