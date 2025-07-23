for (let i2 = 10, i3 = 10; i3--, i3;) {
}
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    class C15 {
    }
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        this instanceof C15;
        const v21 = this.constructor;
        try { new v21(); } catch (e) {}
    }
    new F16(a11, a14);
}
new F9(-13369, F9, F9, F9);
new F9();
for (let i27 = -13369, i28 = 10; i27 < i28; i28--) {
}
gc();
