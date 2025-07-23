function f0() {
    const o1 = {
    };
    function f2() {
        class C4 {
        }
        const t6 = C4.constructor;
        return t6(Uint8Array);
    }
    Object.defineProperty(o1, "hour", { configurable: true, get: f2 });
    return o1;
}
class C7 extends f0 {
}
const v8 = new C7();
class C11 extends Date {
}
const v12 = new C11();
try { v12.toLocaleTimeString("object", v8); } catch (e) {}
gc();
