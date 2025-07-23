class C1 {
}
function f2(a3, a4) {
    a3.e += 4.4396413575649145;
    return a4;
}
const v5 = new C1();
v5.toString = f2;
const v6 = new C1();
const v7 = [f2];
const v8 = [4.4396413575649145,v7,v6,v5];
const v10 = new Float32Array(v7, v8, Float32Array);
try { v10.join(v8); } catch (e) {}
gc();
