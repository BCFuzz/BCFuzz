for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let v10 = 0; v10 < 5; v10++) {
    function F11(a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        function f16(a17) {
            return this;
        }
        f16(a15).parseInt(this);
    }
    const v20 = new F11(v10, v10, F11);
    const t11 = v20.constructor;
    new t11();
}
gc();
