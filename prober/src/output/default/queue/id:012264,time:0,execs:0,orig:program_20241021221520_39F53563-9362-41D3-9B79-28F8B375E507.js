function f1(a2) {
    return "p";
}
const v3 = f1.bind();
v3.apply(f1);
const v5 = ("p").propertyIsEnumerable;
try { v5(v5, "p", v3); } catch (e) {}
const v9 = new Int8Array(3129);
for (const v10 in v9) {
}
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
