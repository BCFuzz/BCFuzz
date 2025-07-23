function f0() {
    const o8 = {
        toString(a3) {
            const v4 = super[this];
            a3.b &= v4;
            super[v4];
            super[-2];
            return super.d;
        },
    };
    return o8;
}
const v9 = f0();
class C10 {
}
class C11 {
}
const v12 = new C11();
const v13 = delete C10[1958875990];
f0();
try { v9.toString(v13); } catch (e) {}
typeof v12 === "object";
gc();
