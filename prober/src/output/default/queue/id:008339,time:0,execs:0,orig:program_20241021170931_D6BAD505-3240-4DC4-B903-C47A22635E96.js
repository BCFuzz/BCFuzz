class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
try { v2(v2, v2, v1); } catch (e) {}
const v4 = [v1];
const v6 = new Map(v4);
const v7 = v6.entries();
try { v7.next(v4, v2); } catch (e) {}
gc();
