class C3 {
    #o(a5) {
        delete this[a5];
        const v7 = this[a5];
        try { new v7(-4294967297); } catch (e) {}
        try { this.sin(); } catch (e) {}
        return -4294967297;
    }
    o(a11, a12) {
        return a12;
        super.a |= -4294967297;
        for (let v13 = 0; v13 < 32; v13++) {
            a11["p" + v13] = v13;
        }
        return a12;
    }
}
const v16 = new C3();
try { v16.o(-1000.0, v16); } catch (e) {}
const v18 = new C3();
const v19 = new C3();
const v20 = v19?.constructor;
try { new v20(); } catch (e) {}
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    const v28 = a24?.constructor;
    try { new v28(); } catch (e) {}
    try { a27.o(a26, C3); } catch (e) {}
    this.a = a24;
    this.e = -4294967297;
    this.f = a26;
}
try { F22(v16, v19, v19, -4294967297); } catch (e) {}
const v32 = new F22(v16, v18, v19, v16);
v32.e = v32;
const v33 = new F22(C3, -4294967297, 51285, v16);
v33.b = v33;
new F22(v16, v33, v33, v16);
5 & 5;
let v38 = -4294967295;
v38--;
new Int8Array(Int8Array, Int8Array, Int8Array);
const v44 = new Int8Array(255);
for (const v45 in v44) {
    const o46 = {
    };
    o46.e = o46;
    for (let [i51, i52] = (() => {
            const v48 = o46.e;
            v48.e = v48;
            v48[Symbol.toPrimitive] = Symbol;
            return [-3, 10];
        })();
        i51 < i52;
        -i52, i52--) {
    }
}
gc();
