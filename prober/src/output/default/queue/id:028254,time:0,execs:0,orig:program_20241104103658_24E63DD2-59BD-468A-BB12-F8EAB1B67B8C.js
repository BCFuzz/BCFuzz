function f0() {
    const v2 = createGlobalObject();
    class C4 extends v2.Float16Array {
    }
    new C4();
    return v2;
}
f0();
f0();
f0();
class C9 extends f0 {
}
new C9();
const v12 = createGlobalObject();
const v15 = URIError().__proto__;
v15[1] = v15;
const o16 = {
};
const v18 = new Proxy(v15, o16);
v18.__proto__ = v12;
for (let [i31, i32] = (() => {
        for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
        }
        return [0, 10];
    })();
    i31 < i32;
    i32--) {
}
Object.defineProperty(v12, 2276664664, { configurable: true, get: fullGC });
gc();
