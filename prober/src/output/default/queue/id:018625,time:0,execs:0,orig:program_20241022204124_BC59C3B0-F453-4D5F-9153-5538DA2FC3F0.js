for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 10; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                function f29(a30, a31) {
                    const v34 = Date();
                    v34 >> v34;
                    return arguments;
                }
                f29(F10, i21);
            }
        }
        new F14(a12, a12, F10);
    }
}
new F10();
gc();
