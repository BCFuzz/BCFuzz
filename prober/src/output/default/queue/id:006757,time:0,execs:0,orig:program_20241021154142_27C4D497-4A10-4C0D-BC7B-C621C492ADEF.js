class C1 {
}
const v2 = new C1();
const v3 = v2.constructor;
const v4 = new v3(C1, 11, v2, v3, v3);
class C6 extends WeakSet {
    toString(a8, a9) {
    }
}
const v10 = new C6();
const v13 = new Int32Array(681);
function f14(a15, a16, a17, a18) {
    function f20() {
        class C21 {
        }
        const v22 = new C21();
        const v23 = new C21();
        function f24(a25, a26, a27) {
            const o29 = {
                get c() {
                    with (v23) {
                    }
                    return a25;
                },
                ...a26,
            };
            return o29;
        }
        f24(v22, f24());
        const v33 = [Reflect,Reflect];
        const v34 = v10.toString;
        Reflect.apply(v34, v4, v33);
        return v34;
    }
    Object.defineProperty(arguments, "valueOf", { writable: true, value: f20 });
    arguments[2] = arguments;
    let v36 = arguments[2];
    v36--;
    return a18;
}
v13.map(f14);
gc();
