class C1 {
}
const v2 = new C1();
function f3() {
    const v5 = [Reflect];
    Reflect.construct(Set, v5, C1);
    return v5;
}
v2[Symbol.toPrimitive] = f3;
const v11 = [v2,v2,v2,v2,v2];
Object.defineProperty(v11, "minimumIntegerDigits", { configurable: true, enumerable: true, value: v2 });
const v12 = ["YlW",904623.0599490013];
try { v12.toLocaleString("YlW", v11); } catch (e) {}
gc();
