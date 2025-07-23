for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Proxy(Reflect, Reflect);
function f13() {
    return Reflect;
}
Object.defineProperty(v12, Symbol.toPrimitive, { writable: true, enumerable: true, value: f13 });
gc();
