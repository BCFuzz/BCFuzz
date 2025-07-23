for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 25; v10++) {
    function F11(a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        const v17 = new ArrayBuffer(a15, a15);
        const v19 = new DataView(v17);
        const v20 = v19.__proto__;
        try { v20.getUint32(F11); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            const o25 = {
                set b(a23) {
                    for (let v24 = 0; v24 < 5; v24++) {
                    }
                },
            };
            o25.b = o25;
        }
    }
    new F11();
    new F11();
}
for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
}
gc();
