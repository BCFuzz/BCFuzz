function f0() {
}
const v1 = [f0];
const v3 = [[v1],v1,f0,f0];
class C4 extends f0 {
    #m(a6, a7) {
        super[this];
        Object.defineProperty(v1, "e", { writable: true, set: f0 });
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = a12;
            this.a = new.target;
        }
        new F10(F10, a6, this, a7);
        const v17 = new F10(a6, this, this, v3);
        const v18 = new F10(f0, a6, v17, F10);
        return v18;
    }
}
const v19 = new C4();
const v20 = v19?.constructor;
try { new v20(); } catch (e) {}
const v22 = new C4();
const v23 = v22?.constructor;
try { new v23(); } catch (e) {}
new C4();
4061 % 4061;
const v29 = new Uint16Array(4061);
v29[417];
new Uint16Array(8);
Int32Array.prototype = Int32Array;
new Int32Array(64);
const v37 = [13,-1979785640,268435441,-1073741824,-9007199254740991,-45599,12368];
const v38 = [-177963933,-498655352,536870888,2147483647,-613604698,1707642562,-65535,1073741824,65536];
const v39 = [4294967296,-9007199254740992,536870912,769595671,268435456,31851,268435441,536870887,4294967295];
function f40(a41, a42) {
    const o44 = {
        get c() {
        },
    };
    return o44;
}
try { f40(64, v22); } catch (e) {}
f40(v38, v38);
f40(v38, v37);
f40(v37, v39);
function f50(a51) {
}
class C52 extends Date {
}
function f53(a54, a55) {
}
class C56 {
}
new C56();
const v58 = [-4.0,-1000000000000.0,0.0,-255926.1388551552];
function f59(a60, a61) {
    return v58;
}
for (let v62 = 0; v62 < 500; v62++) {
}
gc();
