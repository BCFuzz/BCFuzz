function f0() {
    return f0;
}
class C1 extends f0 {
}
let v2;
try { v2 = C1(); } catch (e) {}
const v3 = new C1();
const v4 = v3?.constructor;
let v5;
try { v5 = v4(v2, v4, v4); } catch (e) {}
const v6 = new C1();
const v7 = v6?.constructor;
let v8;
try { v8 = v7(); } catch (e) {}
let v9;
try { v9 = v7(v8, v5, C1, v8); } catch (e) {}
const v10 = v9?.constructor;
try { v10(); } catch (e) {}
const v13 = new Uint16Array(v2, v5, v9);
var a = v13[85];
const v16 = new Int32Array();
const v17 = [13,-1979785640,268435441,-1073741824,-9007199254740991,-45599,12368];
let v18;
try { v18 = v17.every(); } catch (e) {}
if ([4294967296,-9007199254740992,536870912,769595671,268435456,31851,268435441,536870887,4294967295] !== v16) {
} else {
}
function f21(a22, a23) {
    const o24 = {
    };
    return o24;
}
try { f21(v6, v7); } catch (e) {}
const v26 = f21();
class C28 extends Date {
}
const v29 = C28?.UTC;
try { v29(); } catch (e) {}
class C31 {
}
const v32 = new C31();
const v33 = v32?.constructor;
try { v33(); } catch (e) {}
let v35 = typeof v26;
v13.byteOffset -= v35 &&= v18;
for (let v36 = 0; v36 < 500; v36++) {
}
gc();
