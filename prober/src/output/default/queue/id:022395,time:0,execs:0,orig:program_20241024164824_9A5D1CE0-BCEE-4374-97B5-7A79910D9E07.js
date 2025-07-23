function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
new F3();
const v10 = new Int32Array(681);
function f11(a12, a13, a14, a15) {
    const v16 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
    const v17 = [1232491872,129,16,-49163,565601673,57427,-2];
    const v18 = [7940,-1024,255,-8,15,-1,-1506774697,-2147483648,-1634477063];
    function f19(a20, a21, a22) {
        const o23 = {
            ...a22,
            4: a21,
        };
        o23[1] = o23;
        return o23;
    }
    f19[3] = 681;
    f19(681, f19(v17, v16, v18), v17);
    function F26(a28, a29, a30) {
        if (!new.target) { throw 'must be called with new'; }
    }
    return v17;
}
v10.map(f11);
gc();
