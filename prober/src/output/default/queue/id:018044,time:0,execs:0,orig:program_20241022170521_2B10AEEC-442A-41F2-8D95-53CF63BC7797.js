function f0(a1, a2, a3, a4) {
    return a1;
}
class C5 extends f0 {
}
const v6 = [1000000000.0,-0.0,-1.7278990817538674e+308,-4.0,1000000000000.0,1.0,7318.436939689447,-5.0,-3.0];
function f7() {
    return C5;
}
v6.toString = f7;
Set.style = v6;
const o18 = {
    n(a10, a11, a12) {
        const v13 = this;
        const v14 = v13.Set;
        const v15 = v13.Intl;
        const t16 = v15.DisplayNames;
        new t16(a10, v14);
        return v15;
    },
};
const v19 = o18.n;
try { v19(Set, o18, C5, v19, v19); } catch (e) {}
gc();
