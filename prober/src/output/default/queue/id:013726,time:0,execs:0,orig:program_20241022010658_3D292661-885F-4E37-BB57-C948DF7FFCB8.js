const v0 = /U[\111]/g;
const v1 = /Y\xe2\x81\xa3/ygsu;
class C2 {
    p(a4, a5) {
        `of${a5}dotAll`;
    }
}
const v7 = new C2();
const v8 = new C2();
const v9 = new C2();
function f10(a11, a12, a13) {
    try { a12.p(v0, a11); } catch (e) {}
    for (let v15 = 0; v15 < 100; v15++) {
    }
    return a12;
}
f10(v1, v7);
f10(v8, v9);
gc();
