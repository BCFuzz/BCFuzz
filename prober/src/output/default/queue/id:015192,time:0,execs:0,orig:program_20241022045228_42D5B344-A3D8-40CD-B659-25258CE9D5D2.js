for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i30, i31] = (() => {
                    function f20(a21, a22, a23, a24) {
                        new SharedArrayBuffer();
                        return arguments;
                    }
                    f20(a12, 0, v13, f20);
                    return [0, 10];
                })();
                i30 !== i31;
                i31--) {
                for (let v38 = 0; v38 < 5; v38++) {
                }
            }
        }
        new F14();
    }
}
new F10();
gc();
