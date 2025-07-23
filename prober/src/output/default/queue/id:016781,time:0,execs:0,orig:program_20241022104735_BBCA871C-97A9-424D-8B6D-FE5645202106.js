for (let i2 = 0, i3 = 10; i3--, i2 != i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                const v30 = F10 ^ [-10];
                const o33 = {
                    "maxByteLength": 256,
                };
                const v35 = new SharedArrayBuffer(256, o33);
                const v37 = new DataView(v35);
                try { v37.getUint8(v30); } catch (e) {}
            }
        }
        new F14(this, this, v13);
    }
}
new F10(F10);
gc();
