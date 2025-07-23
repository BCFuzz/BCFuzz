for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v12 = new Uint32Array(1000);
for (const v13 in v12) {
    for (let i = 0; i < 5; i++) {
    }
    if (!v13) {
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F14(F14, v12);
    }
    function f19(a20, a21, a22, a23) {
        return v13;
    }
    f19(1000, f19, 1000, f19);
}
gc();
