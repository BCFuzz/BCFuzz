class C0 {
}
const v1 = new C0();
const o7 = {
    set h(a4) {
        v1[a4] = "function";
        ("function")[512];
        [5.0,2.220446049250313e-16,2.220446049250313e-16,0.6205918289088778,2.220446049250313e-16,2.0,-1.4079499147579268e+308];
    },
};
function F8(a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F8("function");
const v12 = new F8(F8);
const v13 = new F8(C0);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    const v19 = this.constructor;
    try { new v19(a17, v12, o7); } catch (e) {}
    a18.h = a18;
}
new F14(v13, v13, v11);
gc();
