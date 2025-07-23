const v1 = createGlobalObject();
const v3 = URIError(URIError);
const o4 = {
};
const v6 = new Proxy(v3, o4);
v6[1] = v6;
v6.__proto__ = v1;
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
Object.defineProperty(v1, 2276664664, { configurable: true, get: fullGC });
gc();
