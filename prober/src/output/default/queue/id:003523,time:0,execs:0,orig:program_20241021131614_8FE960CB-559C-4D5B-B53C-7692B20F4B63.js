function f1() {
    return f1;
}
class C2 extends f1 {
}
let v3;
try {
const t0 = 1.4371055554959572e+308;
v3 = t0();
} catch (e) {}
const v4 = new C2();
const v5 = v4.constructor;
let v6;
try { v6 = v5(v3, v5); } catch (e) {}
const v7 = new C2();
const v8 = v7.constructor;
const v9 = v8();
try { v8(v9, v6, C2, v9); } catch (e) {}
const v12 = new Uint16Array();
v12[85];
typeof f1;
for (let v15 = 0; v15 < 250; v15++) {
}
gc();
