function f0(a1) {
    const o2 = {
    };
    return o2;
}
const v3 = f0(f0);
function f4() {
    const v7 = new Proxy(Reflect, Reflect);
    return v7.preventExtensions(v7);
}
Object.defineProperty(v3, "toString", { enumerable: true, value: f4 });
class C9 extends f0 {
    static [v3];
}
gc();
