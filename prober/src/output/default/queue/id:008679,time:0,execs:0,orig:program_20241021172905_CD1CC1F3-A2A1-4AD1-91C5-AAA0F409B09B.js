for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 25; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i28, i29] = (() => {
                    const v23 = ([1000.0,Infinity,-0.0,1e-15])["indexOf"](2.220446049250313e-16, 0);
                    try { JSON.stringify(0, Int32Array, v23); } catch (e) {}
                    return [0, 10];
                })();
                i28 < i29;
                i29--) {
            }
        }
        new F14(F14, F10, F10);
    }
}
new F10(F10);
gc();
