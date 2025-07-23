for (let v0 = 0; v0 < 250; v0++) {
    function f1(a2, a3) {
        const v5 = new ArrayBuffer();
        const v7 = new DataView(v5);
        const v8 = v7.__proto__;
        try { v8.setInt16(); } catch (e) {}
        class C10 {
        }
        const o17 = {
            [a3](a12, a13, a14, a15) {
                a3(a14, C10, a2);
            },
        };
    }
    f1();
}
gc();
