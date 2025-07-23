function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = Array();
let v5;
try { v5 = v4.shift(); } catch (e) {}
class C6 extends F0 {
}
const v7 = C6?.constructor;
let v8;
try { v8 = v7(Array, v5, v4, C6, v7); } catch (e) {}
const v9 = new C6();
try { v9.p(); } catch (e) {}
const v12 = Array();
const v13 = [F0,F0,F0,F0];
for (let i15 = 0; i15 < 21768; i15++) {
}
if (v12 > v13) {
}
try { Date.now(); } catch (e) {}
class C23 extends Date {
}
const v24 = new C23();
try { v24.setUTCMilliseconds(v8); } catch (e) {}
const v26 = new C23();
try { v26.toString(); } catch (e) {}
gc();
