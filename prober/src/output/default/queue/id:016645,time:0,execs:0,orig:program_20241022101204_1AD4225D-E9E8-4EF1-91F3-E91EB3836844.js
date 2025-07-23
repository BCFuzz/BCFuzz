const v1 = Date();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F2;
    a4.toString = Date;
}
const v5 = new F2(Date);
const v6 = new F2(F2);
const t8 = v6.h;
new t8(v5);
([v5,v1]).join(v5);
gc();
