const v0 = /a+b|cxyz{1,}?d[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]+/yisu;
const v4 = Date(369084.3961239313);
const v5 = [369084.3961239313,v0];
const v7 = [369084.3961239313,v5,,[v5,v5,v4]];
const v9 = /\u{12345}f\1111/dis;
for (const v10 of "toPrimitive") {
    const v11 = v9 + v7;
    const v13 = this.RegExp;
    try { v13(v11, v10); } catch (e) {}
}
for (let i17 = 0, i18 = 1000; i18--, i17 < i18;) {
}
for (let i27 = 0, i28 = 10;
    i27 < i28;
    (() => {
        i28--;
        for (let i34 = i28, i35 = 10; i34 < i35; i35--) {
        }
    })()) {
}
gc();
