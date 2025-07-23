function f0() {
    const o1 = {
    };
    return o1;
}
f0();
const v3 = f0();
const v4 = f0();
class C5 {
}
const v6 = C5.apply;
let v7;
try { v7 = v6(); } catch (e) {}
const v8 = C5.__lookupGetter__;
let v9;
try { v9 = v8(); } catch (e) {}
let v10;
try { v10 = v8(C5, v9, v6); } catch (e) {}
let v11;
try { v11 = C5(); } catch (e) {}
const v12 = new C5();
let v13;
try { v13 = v12.constructor(C5, v8, v12, v10); } catch (e) {}
const v14 = new C5();
let v15;
try { v15 = v14.constructor(v4, v14, v11, v3, v3); } catch (e) {}
let v17;
try { v17 = Uint32Array.apply(); } catch (e) {}
try { Float32Array(); } catch (e) {}
const v21 = new Uint16Array(v6, v17, v17);
const v22 = v21.constructor;
const v23 = new v22(v22, v15, C5);
try { v23.forEach(Uint16Array, v23, v23, C5); } catch (e) {}
const v25 = v23.sort();
try { v25.sort(v14); } catch (e) {}
const v28 = new Int16Array(v21, v13);
let v29;
try { v29 = v28.sort(v3); } catch (e) {}
try { BigUint64Array(v12, v22, v25); } catch (e) {}
const v32 = new BigUint64Array(C5);
try { v32.findLastIndex(v7, v23); } catch (e) {}
class C34 {
}
try { C34.call(); } catch (e) {}
class C36 {
}
const v37 = C36.__defineSetter__;
try { v37(f0, v29, v32, v8); } catch (e) {}
const v39 = new C36();
const v40 = v39.constructor;
const v41 = v40.constructor;
try { v41(v37); } catch (e) {}
for (let v43 = 0; v43 < 5; v43++) {
}
try { v40(); } catch (e) {}
for (let i47 = 0, i48 = 10; i47 < i48; i48--) {
    for (let v55 = 0; v55 < 10; v55++) {
        for (let v56 = 0; v56 < 5; v56++) {
        }
    }
}
gc();
