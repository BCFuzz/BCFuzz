function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = [4.214438650058961,0.6442502562539855];
v2.toString = f0;
const v5 = ["YlW","YlW",v2];
v5.currencySign = v5;
const v6 = ["YlW",904623.0599490013];
try { v6.toLocaleString("YlW", v5); } catch (e) {}
gc();
