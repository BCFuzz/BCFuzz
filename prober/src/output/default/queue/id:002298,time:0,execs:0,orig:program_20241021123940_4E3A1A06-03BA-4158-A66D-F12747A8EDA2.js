class C6 {
}
const v7 = new C6();
class C9 {
    o(a11, a12, a13, a14) {
        return -11n;
    }
}
const v15 = new C9();
const v16 = new C9();
const v17 = `
    let v18;
    try { v18 = v7.setInt32(v17, v15, v17, -891324785n); } catch (e) {}
    function F19(a21, a22, a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F19(v16, -9223372036854775808n, -891324785n, v18);
`;
eval(v17);
gc();
