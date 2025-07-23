const v1 = Date();
class C2 {
}
const v3 = C2.constructor;
let v4;
try { v4 = v3(v1); } catch (e) {}
const v6 = new Uint8Array(C2, v4, v3);
const v7 = v6.lastIndexOf;
try { v7.call(); } catch (e) {}
gc();
