const v0 = /GJ\1112/mds;
const v1 = /M[](ab|cde)\1/mdsu;
class C2 {
}
const v3 = new C2();
for (let v4 = 0; v4 < 5; v4++) {
    const v5 = v1.__proto__;
    function F6(a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        a9.unicode = a9;
    }
    new F6(v3, v0);
    new F6(v5, v5);
}
gc();
