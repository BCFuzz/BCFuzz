function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -6.065087292165796;
    this.h = a4;
}
const v6 = new F2(-6.065087292165796, -6.065087292165796);
new F2(v6, v6);
const v8 = new F2(v6, v6);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
}
const v15 = new F9(v6, v6, F9, F2);
const v16 = new F9();
new F9(F9, -1.0, v6, v16);
class C18 {
    c;
    4 = -1.0;
}
new C18();
new C18();
new C18();
const v23 = Date();
class C24 extends Date {
    g;
    static [v23];
}
const v25 = new C24();
try { v25.toLocaleTimeString(v25); } catch (e) {}
new C24();
const v28 = new C24();
try { v28.toString(); } catch (e) {}
class C30 {
}
const v31 = new C30();
try { v31.propertyIsEnumerable(); } catch (e) {}
new C30();
let v35;
try { v35 = ("matchAll").toLocaleLowerCase(v15, v8); } catch (e) {}
class C36 {
}
const v37 = new C36();
const v38 = v37?.constructor;
try { new v38(C36, F2, C30, v35); } catch (e) {}
function F40(a42, a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
}
new F40("matchAll", F40, v25, C24);
class C47 extends C36 {
}
let v48 = 0;
do {
    v48++;
} while (v48 < 4)
const v52 = new C47();
v52?.constructor;
class C54 extends C36 {
}
for (let v55 = 0; v55 < 500; v55++) {
    function f56(a57) {
        return a57;
    }
    v55++;
    v55--;
}
gc();
