class C1 {
    toString(a3, a4) {
        for (let v5 = 0; v5 < 10; v5++) {
            const v8 = ("p" + v5).indexOf(a3);
            const v9 = v8 >> v8;
            v9 + v9;
        }
    }
}
const v11 = new C1();
const v12 = new C1();
function f13(a14, a15) {
    const o22 = {
        [a15](a17, a18, a19) {
            try { a18.undefined(); } catch (e) {}
            v12.toString();
        },
    };
    o22.undefined(a15, o22);
    return f13;
}
f13(0.19412675879413133, v11);
f13(0.19412675879413133, v12);
gc();
