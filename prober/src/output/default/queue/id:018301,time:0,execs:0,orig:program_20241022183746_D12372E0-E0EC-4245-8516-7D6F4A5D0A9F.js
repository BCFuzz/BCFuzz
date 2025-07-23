function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = [F0,F0,F0,F0,F0];
const v5 = [1000,4,-4294967296,-4294967297,1024,1979,-701081172,536870888,10,-9007199254740991];
const v6 = [1000,76974883,2122505017,-60543];
const v7 = [-16,41026];
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = this.constructor;
    try { new v14(v7, v5, v5); } catch (e) {}
    a11[1] = a11;
    a12.d = a12;
}
new F8(v4, v6, v3);
new F8(v4, v6, v2);
gc();
