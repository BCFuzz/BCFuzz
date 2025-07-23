for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 5; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            a17.arguments;
            for (let [i23, i24] = (() => {
                    let v21 = 10;
                    return [0, v21++];
                })();
                i24;
                i24--) {
            }
        }
        F14.prototype = F14;
        const v30 = new F14(F10, F14);
        const v31 = v30.prototype;
        try { new v31(v30, v30); } catch (e) {}
    }
}
new F10();
gc();
