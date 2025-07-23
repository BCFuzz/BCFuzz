const v2 = [Uint32Array,Uint32Array,Uint32Array];
function f3() {
    function F5(a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = this.constructor;
        try { new v8(); } catch (e) {}
        const v10 = a7 ^ a7;
        v10 << v10;
    }
    new F5(14n);
}
v2.valueOf = f3;
const v13 = [0.3791757979158641,5.0,0.6074445362731085,3.0];
v13[Symbol.toPrimitive] = f3;
v13.toSpliced(v13);
class C17 extends Uint32Array {
}
const v18 = new C17();
v18.subarray(1);
+v2;
gc();
