const v0 = [];
class C1 {
}
function f2(a3) {
    for (let [i18, i19] = (() => {
            for (let v6 = 0; v6 < 100; v6++) {
                function f8(a9, a10) {
                    const o11 = {
                        "f": a10,
                        __proto__: a9,
                    };
                    const v12 = o11.f;
                    try { v12(); } catch (e) {}
                    Float32Array.from(o11);
                    return f8;
                }
                f8(f8(Date), f8);
            }
            return [0, 10];
        })();
        i18 < i19;
        i19--) {
    }
    return v0;
}
C1.toString = f2;
new C1();
const v27 = new C1();
v27.constructor = f2;
const v28 = v27.__lookupSetter__;
try { v28(v27); } catch (e) {}
const v30 = v27.constructor;
v30.toString = f2;
const v31 = v30.toString;
try { v31(); } catch (e) {}
const v33 = new C1();
v33.toLocaleString();
v33.__lookupSetter__;
gc();
