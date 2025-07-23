function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -12;
    this.c = -12;
    this.f = -12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    a7.h;
    a8.d = a8;
    const o16 = {
        "f": a7,
        "h": F0,
        "d": v5,
        ...a8,
        [v5](a11, a12, a13, a14) {
            a14[a13] = a11;
            const o15 = {
                __proto__: this,
                [a13]: this,
                "e": a12,
            };
            return v3;
        },
        "c": v4,
    };
    o16.c;
    return o16;
}
const v18 = f6(v3, v3);
const v19 = f6(v3, v4);
const v20 = f6(v19, v19);
v20.f = v20;
1073741823 + 1073741823;
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    a27.d = a27;
    this.f = f6;
    this.f = a27;
    this.b = a27;
}
new F25(v19, v18, v20);
new F25(1073741823, v18, v4);
new F25(v4, v18, v4);
try { new Uint8ClampedArray(-16, -16, -16); } catch (e) {}
Uint8ClampedArray.d = Uint8ClampedArray;
class C36 extends Uint8ClampedArray {
}
C36.d = f6;
C36.d = C36;
new C36();
gc();
