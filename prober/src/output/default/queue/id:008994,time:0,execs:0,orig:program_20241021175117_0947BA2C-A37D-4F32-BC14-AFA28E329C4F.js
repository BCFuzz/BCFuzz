function f0(a1, a2) {
    const o3 = {
        __proto__: a1,
    };
    o3.prototype = o3;
    return o3;
}
f0(f0);
gc();
