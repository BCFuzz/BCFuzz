-0n;
function f9(a10, a11, a12, a13) {
    const o18 = {
        m(a15, a16) {
            "string" << a10;
        },
    };
    return o18;
}
const v19 = f9(0n);
const v20 = f9();
class C21 {
    constructor(a23, a24, a25, a26) {
        try { a26.m(); } catch (e) {}
        "string" != a26;
    }
}
const v29 = new C21();
const v30 = new C21(1640262492, 1640262492, v20);
const t19 = v30.constructor;
new t19(v29, v29, v29, v19);
const v34 = ("number").substring;
try { v34("m"); } catch (e) {}
class C36 {
}
const v37 = new C36();
const v38 = [];
const v41 = new Int32Array();
try { Float32Array("number", v38, v37); } catch (e) {}
function f44(a45, a46, a47, a48) {
    arguments[0];
}
f44(v41);
v41.map(f44);
gc();
