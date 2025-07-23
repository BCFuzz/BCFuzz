class C1 {
}
class C2 extends C1 {
}
Object.defineProperty(C1, 2, { value: NaN });
const v3 = [110.84070194851734,1e-15,879965.4642361167,1000000.0,-5.156502673906553e+307];
function f4(a5, a6) {
    return v3;
}
v3.toString = f4;
const t10 = v3.constructor;
const v8 = t10(v3);
try { new Int8Array(v8); } catch (e) {}
gc();
