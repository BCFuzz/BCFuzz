makeMasquerader();
for (let i4 = -3, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
        }
    })()) {
}
const v22 = /[FrC]/yvis;
const v23 = [makeMasquerader,makeMasquerader];
const v24 = [v23,v23,v23,v23];
const v25 = /a??/dsu;
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    const v30 = this.constructor;
    let v31;
    try { v31 = new v30(this, v22); } catch (e) {}
    this.f = v31;
    a29.global = v23;
    if (a29 != v31) {
    } else {
    }
}
const v33 = new F26(v25, v25);
const t25 = v33.constructor;
new t25(v24, v33);
gc();
