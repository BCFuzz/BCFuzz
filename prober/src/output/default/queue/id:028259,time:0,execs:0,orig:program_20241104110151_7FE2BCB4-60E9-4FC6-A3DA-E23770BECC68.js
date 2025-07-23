const v1 = createGlobalObject();
const v4 = URIError().__proto__;
const o5 = {
};
const v7 = new Proxy(v4, o5);
v7.__proto__ = v1;
for (let i10 = 0, i11 = 10;
    i10 < i11;
    (() => {
        v7[65537] = i10;
        i11--;
    })()) {
}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
