const v1 = new BigInt64Array();
const v2 = v1.buffer;
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
v2.transferToFixedLength();
const o18 = {
    n(a15, a16, a17) {
        return this;
    },
};
const v20 = o18.n.apply(v1);
try { v20.indexOf(); } catch (e) {}
gc();
