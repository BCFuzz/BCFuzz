for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 10; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i32, i33] = (() => {
                    function f20(a21, a22, a23, a24) {
                        async function f26(a27, a28, a29) {
                            return f20;
                        }
                        return arguments;
                    }
                    f20();
                    return [0, 10];
                })();
                i32 !== i33;
                i33--) {
            }
        }
        new F14(this, a12, v13);
    }
}
new F10(F10);
gc();
