function f1(a2) {
    const o3 = {
        __proto__: a2,
    };
    return o3;
}
const v4 = f1(Set);
const v5 = f1(v4);
const v8 = [v4];
v8.currencyDisplay = v5;
const v9 = ["YlW",904623.0599490013];
try { v9.toLocaleString("YlW", v8); } catch (e) {}
gc();
