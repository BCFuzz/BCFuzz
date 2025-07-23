function f0(a1, a2) {
    return f0;
}
f0.prototype = f0;
function f3(a4, a5, a6, a7) {
    const t5 = a4.constructor;
    t5(f0);
    return f3;
}
f3(f3);
gc();
