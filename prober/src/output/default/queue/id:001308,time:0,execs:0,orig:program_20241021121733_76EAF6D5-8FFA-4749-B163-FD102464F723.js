new Int32Array();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
new F4();
const v7 = new F4();
const v8 = new F4();
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(F4); } catch (e) {}
    a11.e = a11;
}
try { F9.constructor(); } catch (e) {}
new F9(v7);
new F9(v8);
class C17 {
    #b = -39747;
    constructor(a19, a20) {
        this[6] in arguments;
    }
    87873377 = 255;
}
const v24 = new C17();
const v25 = v24.constructor;
new v25();
const v27 = new v25();
const v28 = v27.toString;
try { v28(); } catch (e) {}
const v30 = new C17();
const t30 = v30.constructor;
new t30();
const v33 = v30.constructor;
new v33();
const v35 = new v33();
const t35 = v35.constructor;
new t35();
new C17();
gc();
