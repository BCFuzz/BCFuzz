const v1 = Array();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a4;
}
const v5 = new F2(Array);
const v6 = new F2(v1);
const v7 = new F2(Array);
function f8(a9, a10) {
    const o16 = {
        valueOf(a12, a13, a14, a15) {
            Object.defineProperty(v6, a10, { writable: true, configurable: true, enumerable: true, value: a15 });
            return v1;
        },
    };
    return v7;
}
f8(v7);
f8(v5, f8);
f8(v7, v7);
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
const v31 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
v31.fill();
const v33 = /(8)/dygu;
class C34 {
}
const v35 = new C34(v33);
const t28 = v35.constructor;
new t28(Array);
for (let v38 = 0; v38 < 25; v38++) {
    for (let v39 = 0; v39 < 250; v39++) {
    }
    v7.a;
}
gc();
