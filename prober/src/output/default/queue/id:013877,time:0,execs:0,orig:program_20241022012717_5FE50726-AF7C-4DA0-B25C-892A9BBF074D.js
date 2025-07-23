function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = this;
    this.g = 16;
    this.b = 16;
    this.d = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static #h = v3;
    f;
    static p(a8) {
        v4[v3] = v4;
        -this;
        new F0();
        try { v4["acos"](v3, v5, v3, v5, v4); } catch (e) {}
        return v3;
    }
}
try { C6(); } catch (e) {}
const v17 = new C6();
v17.e = v17;
v17.f;
const v19 = new C6();
v19.b = v19;
const v20 = new C6();
v20.f = v20;
const v25 = new WeakSet();
try { v25.add(WeakSet); } catch (e) {}
for (let v27 = 0; v27 < 250; v27++) {
    v27 - v27;
    v27 & v27;
    v27++;
    new Uint32Array(50180);
    new WeakSet();
    v27--;
}
gc();
