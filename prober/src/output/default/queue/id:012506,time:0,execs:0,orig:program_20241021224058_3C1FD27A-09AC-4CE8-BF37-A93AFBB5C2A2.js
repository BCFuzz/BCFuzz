for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i25, i26] = (() => {
                    function F19(a21, a22) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    return [0, 10];
                })();
                i26;
                i26--) {
                for (let v32 = 0; v32 < 5; v32++) {
                }
            }
        }
        new F14();
    }
}
new F10(F10);
gc();
