const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v8 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
    const v9 = [1232491872,129,16,-49163,565601673,57427,-2];
    const v10 = [7940,-1024,255,-8,15,-1,-1506774697,-2147483648,-1634477063];
    function f11(a12, a13, a14) {
        a13[3];
        const o16 = {
            ...a14,
            4: a13,
        };
        o16[1] = o16;
        return o16;
    }
    try { f11(f11, f11, v8); } catch (e) {}
    f11(681, f11(v9, v8, v10), v9);
    function F20(a22, a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v25 = new F20();
    return v25;
}
v2.map(f3);
gc();
