const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
}
const v3 = new F1();
const v4 = v3.a;
for (let i7 = -3, i8 = 10; i8--, i7 < i8;) {
}
const v16 = new Int8Array();
const v17 = v16.with;
const v19 = Date();
const v22 = [2147483648,2147483648];
const v24 = [v22,2147483648,[v17],2147483648,v19];
const t14 = v4.constructor;
const v26 = t14(v24);
for (let i29 = 0, i30 = 10;
    (() => {
        i30--;
        for (const v33 of "toPrimitive") {
            const v34 = v33 + v26;
            const v36 = this.RegExp;
            try { v36(v34, v33); } catch (e) {}
        }
        return i29 < i30;
    })();
    ) {
}
gc();
