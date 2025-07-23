const v2 = new Int32Array();
let v3;
try { v3 = v2.some(); } catch (e) {}
class C4 {
}
let v5;
try { v5 = C4(); } catch (e) {}
try { C4.apply(Int32Array, C4, v2, Int32Array, 3681); } catch (e) {}
const v8 = ([-5.7277162230044105,117702.2705564301,-4.0,-942.1766155827127,8.076635620267162,777.4745027627935]).includes;
try { v8(); } catch (e) {}
class C10 {
}
const v11 = new C10();
const v12 = v11.constructor;
try { v12(); } catch (e) {}
const v14 = v11.__defineSetter__;
try { v14(); } catch (e) {}
try { v14(3681, Int32Array, v8, v5, v12); } catch (e) {}
const v17 = new C10();
const v18 = v17.constructor;
try { v18(v17, v18, C10); } catch (e) {}
const v20 = new C10();
const v21 = v20.constructor;
try { v21(v21, v3, v21); } catch (e) {}
try { v11.shift(); } catch (e) {}
const v25 = new Int16Array(3681);
for (const v26 in v25) {
}
gc();
