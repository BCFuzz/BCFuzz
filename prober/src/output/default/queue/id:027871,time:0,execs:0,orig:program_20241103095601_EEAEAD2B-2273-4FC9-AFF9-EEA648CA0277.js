function f0() {
    return f0;
}
class C1 {
}
const v2 = new C1();
function f3() {
    class C4 {
    }
    function f5(a6) {
        const v7 = a6.__proto__;
        const o8 = {
        };
        o8.ownKeys = f0;
        const v10 = new Proxy(v7, o8);
        for (const v11 in v10) {
        }
        return v7;
    }
    C4[Symbol.toPrimitive] = f5;
    class C14 extends C4 {
        static {
            let v15 = this;
            --v15;
        }
    }
    return C4;
}
v2.constructor = f3;
const v17 = v2.constructor;
try { v17(); } catch (e) {}
gc();
