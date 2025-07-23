const v1 = createGlobalObject();
const v4 = URIError().__proto__;
v4[1] = v4;
const o5 = {
};
const v7 = new Proxy(v4, o5);
v7.__proto__ = v1;
for (let [i11, i12] = (() => {
        createGlobalObject();
        return [0, 10];
    })();
    i11 < i12;
    i12--) {
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
Object.defineProperty(v1, 2276664664, { configurable: true, get: fullGC });
gc();
