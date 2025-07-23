function f0() {
    const o4 = {
        "b": 0.6634622372759612,
        ..."prototype",
        "d": "prototype",
    };
}
f0();
f0();
class C10 {
}
const v11 = new C10();
new C10();
new C10();
function f14() {
    const o26 = {
        set h(a18) {
            const o19 = {
            };
            o19.e = 4035;
            const o20 = {
            };
            o20.d = 4035;
            v11[a18] = "function";
            v11.c;
            [5.0,2.220446049250313e-16,2.220446049250313e-16,0.6205918289088778,2.220446049250313e-16,2.0,-1.4079499147579268e+308];
            delete C10[o19];
            const o24 = {
            };
            const o25 = {
            };
            o25.b = "function";
        },
    };
    return o26;
}
const v27 = f14();
function F28(a30) {
    if (!new.target) { throw 'must be called with new'; }
}
const v31 = new F28();
const v32 = new F28(f14);
const v33 = new F28(v32);
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    const v39 = this.constructor;
    try { new v39(a37, v32, v27); } catch (e) {}
    a38.h = a38;
}
new F34(v33, v33, v31);
gc();
