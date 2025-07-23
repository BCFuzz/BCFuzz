const v1 = new Date();
Uint16Array[0] = Date;
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const o13 = {
};
const v16 = v1[Symbol.toPrimitive];
const o19 = {
    valueOf() {
        return v16.apply(o13, Uint16Array);
    },
};
try { o19.valueOf(); } catch (e) {}
gc();
