for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = new ArrayBuffer(a4, this);
        const v9 = new DataView(v7);
        const v10 = v9.__proto__;
        try { v10.setInt32(v7, ArrayBuffer, v9); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            [10,-1,-372238799,65535];
            const o16 = {
                set b(a14) {
                    for (let v15 = 0; v15 < 5; v15++) {
                    }
                },
            };
            o16.b = o16;
        }
    }
    new F1();
    new F1();
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
