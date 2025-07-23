class C0 {
}
const v1 = new C0();
const o2 = {
};
const v4 = new Proxy(v1, o2);
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
for (let v15 = 0; v15 < 5; v15++) {
    const o16 = {
    };
    o16.constructor.keys(v4);
}
gc();
