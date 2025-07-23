function f0() {
    return f0;
}
class C1 {
}
const v2 = new C1();
const v3 = v2.__defineSetter__;
for (let v4 = 0; v4 < 5; v4++) {
    function F6(a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        const v12 = a9.name.codePointAt(a9);
        let v13 = v12 ^ v12;
        v13++;
    }
    const v15 = new F6(196.25100004624983, F6);
    const t15 = v15.constructor;
    new t15(f0, v3);
}
gc();
