const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v8 = a4?.constructor;
    let v9;
    try { v9 = v8(); } catch (e) {}
    ~v9;
    arguments[0] = arguments;
    arguments.valueOf = f3;
    return arguments;
}
v2.map(f3);
gc();
