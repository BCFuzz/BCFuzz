function f1() {
    const o3 = {
        ..."HU",
    };
    return o3;
}
const v4 = f1();
class C5 extends f1 {
}
const t9 = C5.prototype.constructor;
const v8 = new t9(f1, C5, 9007199254740991n, 9007199254740991n);
const v9 = v8[1];
try { v9.substr(v4, 9007199254740991n); } catch (e) {}
gc();
