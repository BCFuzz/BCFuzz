for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int32Array(681);
function f13(a14, a15, a16, a17) {
    const v18 = /(?!(a))\1a*?\P{Decimal_Number}/mv;
    function f19(a20) {
        return a20;
    }
    v18.toString = f19;
    return v18.test();
}
v12.map(f13);
gc();
