for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i24, i25] = (() => {
                    for (let v21 = 0; v21 < 25; v21++) {
                        ("function").concat();
                    }
                    return [0, 10];
                })();
                i24 < i25;
                i25--) {
            }
        }
        new F14(this, this, this);
    }
}
new F10();
gc();
