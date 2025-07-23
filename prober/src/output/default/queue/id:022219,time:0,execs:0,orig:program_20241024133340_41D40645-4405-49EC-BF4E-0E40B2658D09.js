for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const o12 = {
};
const v13 = new Date(Uint16Array);
const v16 = v13[Symbol.toPrimitive];
const o19 = {
    valueOf() {
        v16.apply(o12, Uint16Array);
        return this;
    },
};
try { o19.valueOf(o19, v13, o19); } catch (e) {}
gc();
