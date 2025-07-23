function f0() {
    return f0;
}
const v4 = [f0];
Reflect.apply(Array.from, "number", v4);
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
