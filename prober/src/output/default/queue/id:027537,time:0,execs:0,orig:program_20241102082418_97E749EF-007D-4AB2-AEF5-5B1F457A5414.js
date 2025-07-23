class C0 {
}
const v1 = new C0();
const v2 = v1?.constructor;
try { v2(); } catch (e) {}
const v4 = v1.constructor;
try { v4(v4, v4, C0, v1, v2); } catch (e) {}
const v6 = new C0();
const v7 = v6.constructor;
try { v7(); } catch (e) {}
const v9 = v6.constructor;
let v10;
try { v10 = new v9(); } catch (e) {}
try { v9(); } catch (e) {}
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F12();
new F12();
const v19 = new F12();
try { ("split").strike(); } catch (e) {}
class C22 {
    constructor(a24, a25) {
        const v26 = this?.__defineSetter__;
        try { v26(); } catch (e) {}
        a24?.[1858];
    }
}
const v29 = new C22();
const v30 = v29.constructor;
let v31;
try { v31 = new v30(v30, "split", v17); } catch (e) {}
const v32 = v29.constructor;
try { new v32(v32); } catch (e) {}
new C22();
const v35 = new C22();
class C36 extends C22 {
}
const v37 = new C36();
const v38 = v37.constructor;
try { new v38(); } catch (e) {}
const v40 = new C36();
const v41 = v40.constructor;
try { new v41(v10, v7); } catch (e) {}
const v43 = new C36();
const v44 = v43.constructor;
try { new v44(); } catch (e) {}
const v46 = v43.constructor;
try { new v46(v46, v35, v6, v17); } catch (e) {}
class C48 extends C22 {
}
const v49 = C48.prototype;
const v50 = v49.constructor;
try { new v50(); } catch (e) {}
const v52 = new C48();
const v53 = v52.constructor;
try { new v53(v19, v43, v49, v31); } catch (e) {}
C48 = v29;
class C56 extends v35.constructor {
}
new C56();
for (let v58 = 0; v58 < 500; v58++) {
    try { v58(); } catch (e) {}
    v58++;
    v58--;
}
gc();
