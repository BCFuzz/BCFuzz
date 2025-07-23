const v0 = /foo(?!bar)baz/gisu;
const v1 = /Ys*/du;
Object.defineProperty(v0, "dotAll", { configurable: true, enumerable: true, value: v1 });
v0 / v1;
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
}
gc();
