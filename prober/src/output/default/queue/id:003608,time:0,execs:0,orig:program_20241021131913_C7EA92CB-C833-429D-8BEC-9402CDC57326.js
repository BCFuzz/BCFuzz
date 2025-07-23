class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
v2.prototype = v2;
const v3 = new v2();
const v4 = v3.constructor;
const v5 = v4.__defineSetter__;
try { v5(); } catch (e) {}
try { new v4(v1); } catch (e) {}
const v8 = new C0();
const v9 = v8.constructor;
try { new v9(); } catch (e) {}
v8.__lookupGetter__;
for (let v12 = 0; v12 < 250; v12++) {
}
gc();
