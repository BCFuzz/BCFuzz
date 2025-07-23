class C2 {
}
class C3 extends C2 {
}
class C4 {
    get c() {
        try { C3.replace(); } catch (e) {}
        const o8 = {
            "maxByteLength": 256,
        };
    }
}
const v9 = new C4();
const v11 = new BigUint64Array(586);
for (const v12 of v11) {
    v9.c;
}
gc();
