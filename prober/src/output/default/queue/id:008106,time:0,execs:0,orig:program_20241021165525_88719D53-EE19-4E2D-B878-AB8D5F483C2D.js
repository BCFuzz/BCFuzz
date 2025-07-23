class C0 {
    toString(a2, a3) {
        this.a = a3;
        delete this.a;
    }
}
const v5 = new C0();
const v6 = new C0();
function f7(a8, a9) {
    const o10 = {
        [v6]: v5,
    };
    return a9;
}
const v11 = f7(v5, f7);
f7(v11, v11);
f7(v6, v5);
const v15 = Int8Array.name;
class C18 extends ([7,47108,65535,9007199254740992,9007199254740990,2112954359,9223372036854775807,4096,536870887]).constructor {
}
const v19 = new C18();
v19.copyWithin(v15, v6);
gc();
