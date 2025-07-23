const v3 = Date();
const v4 = [369084.3961239313,369084.3961239313];
const v6 = [369084.3961239313,v4,,[v4,v4,v3]];
const v8 = /\u{12345}f\1111/dis;
for (const v9 of "toPrimitive") {
    const v10 = v8 + v6;
    const v12 = this.RegExp;
    try { v12(v10, v9); } catch (e) {}
}
for (let i16 = 0, i17 = 1000; i17--, i16 < i17;) {
}
for (let i26 = 0, i27 = 10;
    i26 < i27;
    (() => {
        i27--;
        for (let i33 = i27, i34 = 10; i33 < i34; i34--) {
        }
    })()) {
}
gc();
