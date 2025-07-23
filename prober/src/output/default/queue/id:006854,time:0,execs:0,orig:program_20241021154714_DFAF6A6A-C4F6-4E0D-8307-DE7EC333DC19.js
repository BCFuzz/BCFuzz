const v3 = new Int32Array(681);
function f4(a5, a6, a7, a8) {
    let v9;
    try { v9 = undefined(a8, a7, a6, Int32Array, a7); } catch (e) {}
    ~v9;
    arguments[0] = arguments;
    arguments.valueOf = f4;
    return arguments;
}
v3.map(f4);
gc();
