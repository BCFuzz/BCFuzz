const v1 = ([5.0,1000000000000.0,-1000000000000.0,1.7976931348623157e+308,-3.1358076362487546e+307,4.0,3.5786505581300503,0.9469057259882014,1.214002634793813e+308,1000.0]).constructor;
class C2 {
}
let v3 = new C2();
v3 >>>= v1;
const o12 = {
    n(a5, a6, a7) {
        const v8 = this;
        const t8 = v8.Intl.RelativeTimeFormat;
        const v11 = new t8();
        return v11;
    },
};
const t13 = o12.n;
const v14 = t13();
try { v14.format(v3); } catch (e) {}
gc();
