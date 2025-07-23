function f0() {
}
class C4 extends f0 {
    static get growable() {
        const v6 = this[6];
        let v7;
        try { v7 = v6.o(this, v6, v6, -31509); } catch (e) {}
        v6[268435456] = -31509;
        v7 instanceof v6;
        return v7;
    }
    [-31509];
    static #c = 4294967296;
    [5] = 5;
}
C4.name = C4;
const v9 = new C4();
v9[5];
const v11 = new C4();
const v12 = new C4(-31509, v11);
v12[5] = v12;
-(-1073741824);
const o17 = {
};
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    a20.h = a20;
}
const v22 = new F18(o17, F18);
const v23 = v22?.constructor;
try { new v23(v9, 4294967296); } catch (e) {}
const v27 = new Uint32Array(1000);
v27.length = v27;
for (const v28 in v27) {
    function f30(a31, a32, a33, a34) {
        function f36(a37, a38) {
            const v39 = a34 >= o17;
            v39 || v39;
            return arguments;
        }
        f36(arguments, a34);
        return arguments;
    }
    f30.a = f30;
    f30(f30);
}
gc();
