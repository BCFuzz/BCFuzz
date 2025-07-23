function f1(a2, a3) {
    const o4 = {
        "f": a3,
        __proto__: a2,
    };
    const v5 = o4.f;
    try { v5(Date); } catch (e) {}
    Float32Array.from(o4);
    return f1;
}
f1(f1(Date), f1);
gc();
