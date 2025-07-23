const v3 = [369084.3961239313,[369084.3961239313,/a+b|cxyz{1,}?d[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]+/yisu]];
const v5 = /\u{12345}f\1111/dis;
for (const v6 of "toPrimitive") {
    const v7 = v5 + v3;
    const v9 = this.RegExp;
    try { v9(v7, v6); } catch (e) {}
}
for (let i13 = 0, i14 = 1000; i14--, i13 < i14;) {
}
gc();
