const v1 = makeMasquerader();
const v3 = new Proxy(v1, v1);
v3.toString();
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
gc();
