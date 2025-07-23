makeMasquerader();
const v2 = /[FrC]/yvis;
const v3 = [v2,v2,v2,v2];
const v4 = [v2,v2,v2];
const v5 = /a??/dsu;
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    let v11;
    try { v11 = new v10(makeMasquerader, v2); } catch (e) {}
    this.f = v11;
    a9.global = v3;
    this != v11;
}
const v13 = new F6(v5, v5);
const t15 = v13.constructor;
new t15(v4, v13);
gc();
