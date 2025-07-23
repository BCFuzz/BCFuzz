function f0(a1, a2, a3) {
    const o4 = {
    };
    const v5 = o4.constructor;
    v5.getOwnPropertySymbols(v5);
    try { v5.getPrototypeOf(); } catch (e) {}
}
for (let v8 = 0; v8 < 10; v8++) {
    f0(v8, v8, v8);
}
gc();
