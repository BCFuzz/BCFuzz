const v1 = [1000.0,Infinity,2.220446049250313e-16];
function f2() {
    return v1;
}
function f3(a4) {
    return f3;
}
Object.defineProperty(v1, 1858, { get: f2, set: f3 });
function f6(a7, a8) {
    a8[10] &&= 3;
    return a7;
}
Date.toString = f6;
try { Date.toString(); } catch (e) {}
class C10 {
    constructor(a12, a13) {
        a12?.[1858];
    }
}
C10.constructor = f6;
new C10(v1);
class C16 extends C10 {
}
const v17 = new C16();
const v18 = v17.constructor;
try { v18(f2, f2); } catch (e) {}
new C16();
const v21 = C16?.constructor;
try { v21(f3); } catch (e) {}
for (let v23 = 0; v23 < 500; v23++) {
    try { v23(); } catch (e) {}
    v23++;
    v23--;
}
gc();
