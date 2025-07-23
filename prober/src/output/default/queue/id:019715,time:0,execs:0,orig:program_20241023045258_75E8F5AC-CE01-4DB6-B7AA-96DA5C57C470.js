for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 25; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i21 = 0, i22 = 10; i21 <= i22; i22--) {
                for (let v29 = 0; v29 < 5; v29++) {
                }
                function f30(a31, a32) {
                    f30?.[6];
                    return F14;
                }
                f30();
            }
        }
        new F14(v13, a12, v13);
    }
}
new F10();
gc();
