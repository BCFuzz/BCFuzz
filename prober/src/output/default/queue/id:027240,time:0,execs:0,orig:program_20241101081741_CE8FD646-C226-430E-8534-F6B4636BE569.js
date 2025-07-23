for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 25; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                for (let v29 = 0; v29 < 5; v29++) {
                }
                function f30(a31, a32) {
                    const v34 = [3,255,-9223372036854775808,512,14504,10];
                    for (let i36 = 10, i37 = 10; a32 < i37; i37--) {
                    }
                    v34.pop();
                    return arguments;
                }
                f30(F14, i22);
            }
        }
        new F14();
    }
}
new F10(F10);
gc();
