const o11 = {
    m(a1) {
        class C2 {
        }
        const v3 = new C2();
        class C5 extends Int8Array {
            6 = v3;
        }
        const o8 = {
            "maxByteLength": 9,
        };
        const v9 = new SharedArrayBuffer(a1, o8);
        new C5(v9);
        return v9;
    },
};
try { o11.m(o11, o11, o11); } catch (e) {}
gc();
