for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = ([-2147483648,-1024]).includes();
for (let i14 = 0, i15 = 10; v11 < i15; i15--) {
}
const o22 = {
};
o22.b = o22;
o22.f = o22;
delete o22.b;
Reflect.defineProperty(Reflect, Reflect, o22);
gc();
