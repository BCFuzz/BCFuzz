class C1 {
    toString(a3, a4) {
        for (let v5 = 0; v5 < 10; v5++) {
            ("p" + v5).indexOf(a3);
        }
    }
}
const v9 = new C1();
const v10 = new C1();
function f11(a12, a13) {
    const o20 = {
        [a13](a15, a16, a17) {
            let v18;
            try { v18 = a16.undefined(a12); } catch (e) {}
            v10.toString(v18);
        },
    };
    return o20.undefined(a13, o20);
}
const v22 = f11(0.19412675879413133, v9);
f11(0.19412675879413133, v10);
class C24 {
    constructor(a26, a27) {
    }
}
const v29 = new Float32Array(v9, v22, C1);
v29.copyWithin();
for (let v31 = 0; v31 < 250; v31++) {
    v31++;
    v31--;
}
gc();
