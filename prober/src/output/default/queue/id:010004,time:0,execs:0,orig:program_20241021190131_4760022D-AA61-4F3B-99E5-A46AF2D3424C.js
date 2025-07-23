function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = [v2];
v5.unit = v2;
const v6 = ["YlW",904623.0599490013];
try { v6.toLocaleString("YlW", v5); } catch (e) {}
gc();
