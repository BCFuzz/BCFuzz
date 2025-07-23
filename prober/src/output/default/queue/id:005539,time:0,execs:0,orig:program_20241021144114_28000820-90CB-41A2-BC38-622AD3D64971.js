async function f1(a2, a3, a4, a5) {
}
const v6 = f1();
v6.constructor = f1;
v6.catch();
for (let v8 = 0; v8 < 5; v8++) {
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        Int32Array.from(this);
        try { Int32Array(); } catch (e) {}
        function f18() {
            return f18;
        }
        const v19 = f18();
        v19.a = v19;
        class C20 extends f18 {
        }
        try { C20(); } catch (e) {}
        class C22 extends C20 {
        }
        new C22();
        class C24 extends Uint32Array {
        }
        new ArrayBuffer();
        for (let [i30, i31] = (() => {
                10 | 10;
                return [0, 10];
            })();
            i31--, i30 < i31;
            ) {
        }
        return F10;
    }
    new F10();
    new F10();
}
gc();
