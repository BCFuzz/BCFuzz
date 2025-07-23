function f0() {
}
class C1 extends f0 {
    #f;
    static {
        this.toString = f0;
        const v3 = this % this;
        Number.isNaN(v3);
        v3 >> v3;
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        o17.f = v3;
        o17.c = o17;
        o17.f = o17;
    }
}
new C1();
const v19 = new C1();
v19.constructor = f0;
const v20 = v19?.constructor;
try { new v20(); } catch (e) {}
const v22 = new C1();
v22.constructor = f0;
const v23 = v22?.constructor;
try { new v23(); } catch (e) {}
const v26 = new Date();
const v27 = v26?.getMonth;
try { v27(); } catch (e) {}
try { new v27(); } catch (e) {}
const t45 = "-2069764930";
t45[8] = "-2069764930";
const t47 = "-2069764930";
t47[5] = "-2069764930";
("valueOf")[3];
const v34 = ("536870887")?.constructor;
try { new v34("536870887"); } catch (e) {}
for (let [i40, i41] = (() => {
        0 >>> 0;
        10 == 10;
        return [0, 10];
    })();
    i40 >> i40, i41;
    i41--) {
}
function F48(a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v52 = 0; v52 < 10; v52++) {
        for (let v53 = 0; v53 < 250; v53++) {
        }
        ([64,512,27777,-48393,4294967297,4,6323,16,-4294967296,1988475657]).includes(a50, v52);
    }
}
const v56 = new F48();
function f57() {
}
v56.constructor = f57;
const v58 = v56?.constructor;
try { new v58(v56, Date); } catch (e) {}
for (let [i63, i64] = (() => {
        ~10;
        return [0, 10];
    })();
    (() => {
        i64 - i64;
        const v66 = i63 < i64;
        v66 || v66;
        v66 || v66;
        return v66;
    })();
    i64 >>> i64, i64 + i64, i64--) {
}
gc();
