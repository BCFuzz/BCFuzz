const v1 = new WeakMap();
function f2(a3, a4) {
    let v5 = 44485;
    for (; v5--;) {
    }
    const o7 = {
        __proto__: v1,
    };
    for (let v8 = 0; v8 < 5; v8++) {
        try { o7.has(o7); } catch (e) {}
    }
    return o7;
}
f2();
f2();
gc();
