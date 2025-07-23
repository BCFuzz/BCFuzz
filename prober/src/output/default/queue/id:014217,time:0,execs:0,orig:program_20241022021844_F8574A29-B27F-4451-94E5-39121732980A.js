const v2 = new Uint16Array();
const v5 = new Float32Array(v2, 4045);
function f6(a7) {
    let v8;
    try { v8 = v2.set(v5, 4045); } catch (e) {}
    return v8;
}
v5.valueOf = f6;
const v11 = new Float64Array(121);
v11["includes"](548, v5);
gc();
