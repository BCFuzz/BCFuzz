function f0(a1, a2, a3) {
    const o4 = {
    };
    return o4;
}
const v5 = [f0];
v5[0] = v5;
const v6 = v5.pop();
v6.toString = f0;
class C7 {
}
const v8 = new C7();
const v9 = v8.constructor;
const v10 = new v9(v9);
const v11 = v9.constructor;
try { v11(v10, v6); } catch (e) {}
gc();
