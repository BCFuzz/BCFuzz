const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v9 = arguments[2];
    try { v9.some(); } catch (e) {}
    arguments.valueOf = f3;
    return arguments;
}
v2.map(f3);
gc();
