function f0() {
}
function f1() {
    const o11 = {
        "e": f0,
        [f0]: f0,
        get b() {
            const v6 = this[f0];
            v6.__proto__;
            [f0,v6,f0,this,f0];
            const v9 = [f0,-5120];
            [9,v9,v9,v9,v9];
            return this;
        },
    };
    return o11;
}
f1();
const v13 = f1();
try { v13.isPrototypeOf(f0); } catch (e) {}
const v15 = f1();
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.isPrototypeOf(this); } catch (e) {}
    this.g = v15;
    this.a = f1;
    this.c = v13;
}
new F16(v15);
const v21 = new F16(f1);
new F16(F16);
129 + 129;
new Int32Array(129);
-3;
new Int16Array(3);
try { new Int8Array(v21, v21, Int8Array); } catch (e) {}
const v34 = new Int8Array(7);
v34[6] = v34;
function f35(a36, a37, a38) {
    a36.g = a36;
    try { a37(a38, f0, a36); } catch (e) {}
    a38.caller;
    for (let v43 = 0; v43 < 10; v43++) {
        v43 in arguments;
    }
    function f45(a46, a47, a48) {
    }
}
f35.e = f35;
f35(f35, f35, f35);
for (let i52 = 0, i53 = 10; i52 < i53; i53--) {
}
gc();
