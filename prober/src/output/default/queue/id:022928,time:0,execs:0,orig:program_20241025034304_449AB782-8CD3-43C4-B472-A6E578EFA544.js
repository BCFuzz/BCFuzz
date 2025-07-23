class C0 {
    valueOf(a2, a3) {
        const v4 = `
            with ("h") {
            }
        `;
        eval(v4);
    }
}
const v8 = new C0();
const v10 = [55133,128,129,1073741824,4294967296,11,2147483648,5,536870912,12];
try { v10.copyWithin("1025765844", v8); } catch (e) {}
gc();
