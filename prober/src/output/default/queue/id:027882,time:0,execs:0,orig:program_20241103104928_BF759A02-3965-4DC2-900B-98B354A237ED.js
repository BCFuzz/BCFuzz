const v1 = createGlobalObject();
const v4 = URIError().__proto__;
v4[1] = v4;
const o5 = {
};
const v7 = new Proxy(v4, o5);
v7.__proto__ = v1;
for (let i10 = 0, i11 = 10;
    i10 < i11;
    (() => {
        i11--;
        const o17 = {
            [o5]() {
            },
        };
    })()) {
}
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
Object.defineProperty(v1, 2276664664, { configurable: true, get: fullGC });
gc();
