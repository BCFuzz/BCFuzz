const o1 = {
};
o1[Symbol.toStringTag] = "n";
const v4 = o1.toString();
const v5 = [v4];
v5.roundingPriority = v4;
const v8 = ["YlW",904623.0599490013];
try { v8.toLocaleString("YlW", v5); } catch (e) {}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();
