function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
new F0();
class C7 extends F0 {
    constructor(a9, a10, a11, a12) {
        super();
        v2[3] = a9;
    }
    static 9;
    #e = v3;
}
new C7(-65537, v3, -31981, v3);
for (let v14 = 0; v14 < 100; v14++) {
    const v15 = /a\nW/vgi;
    for (let v16 = 0; v16 < 5; v16++) {
        for (let i = 0; i < 5; i++) {
            [0.11697765291066009,1.658788792861256e+308,869367.7102791094,-9.867030224223451e+306,-352.56173335378185,1.7976931348623157e+308,972.9661867200728];
        }
    }
    function f18(a19, a20, a21, a22) {
        a19.exec(a22);
        return f18;
    }
    f18.exec = F0;
    const v24 = f18(v15);
    try { v24(f18); } catch (e) {}
}
gc();
