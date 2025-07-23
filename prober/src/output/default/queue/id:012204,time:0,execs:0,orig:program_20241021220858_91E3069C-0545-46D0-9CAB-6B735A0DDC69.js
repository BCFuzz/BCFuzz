class C0 {
}
class C1 extends C0 {
}
let v2 = new C1();
const v3 = `
    function f4(a5) {
        v2 ||= a5;
        return f4;
    }
    const v6 = /\u{12345}/myvis;
    v6.toString = f4;
    v6.toString();
`;
eval(v3);
gc();
