class C0 {
    #toString(a2) {
    }
}
const v3 = new C0();
const t5 = v3.constructor;
new t5();
const v6 = new C0();
const t8 = v6.constructor;
new t8();
const v9 = v6.constructor;
new v9();
new C0();
class C12 {
    constructor(a14, a15, a16) {
        const t15 = a14.constructor;
        new t15();
        for (const v19 in a14) {
        }
    }
}
const v20 = new C12(v6);
new C12(v6);
new C12(C12);
class C23 {
    toString(a25, a26, a27, a28) {
        const t26 = a25.constructor;
        new t26();
    }
}
const v31 = new C23();
v31.toString(v3);
[0.3809493545114987,512.8925898144391,-Infinity,-1.0];
const v34 = [0.1636333977884601,-5.0,-1000000.0,5.0,-597641.8415590439,-1000.0,-1e-15,-3.0,0.38155142265318587];
const v35 = v34.with();
([774386.6460864826,-2.6705474188458123,2.220446049250313e-16,-3.0,-9.147111514771127e+306,801686.5988158085,-0.4120163013026925,-127.4595118507624,1.0090162245556538e+308,NaN]).flat();
const v39 = Int8Array.from(v20);
try { v39.sort(v35); } catch (e) {}
const v43 = new Uint16Array(2);
try { v43.findLast(v9); } catch (e) {}
for (let v45 of v34) {
    v45++;
    try { v45(); } catch (e) {}
}
gc();
