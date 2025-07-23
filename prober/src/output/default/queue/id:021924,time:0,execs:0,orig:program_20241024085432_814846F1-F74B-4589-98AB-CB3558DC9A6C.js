function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
const v4 = new F1();
const v5 = [v3,v3,v3,v3];
const v6 = [1000,4,-4294967296,-4294967297,1024,1979,-701081172,536870888,10,-9007199254740991];
const v7 = [268435440,536870887,9007199254740991,10,9,4,2];
const v8 = [-16,41026];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = this.constructor;
    let v16;
    try { v16 = new v15(v8, v6, v6); } catch (e) {}
    a12[1] = -61255;
    a13.d = v16;
}
new F9(v5, v7, v4);
new F9(v5, v7, v3);
gc();
