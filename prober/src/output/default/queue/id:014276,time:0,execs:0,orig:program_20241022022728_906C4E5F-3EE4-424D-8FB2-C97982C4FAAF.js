function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(0.4424929383635726, F1);
new F1(v5, v5);
for (let i = 0; i < 5; i++) {
    const t6 = ("undefined").__proto__;
    t6[1365] = 0.4424929383635726;
    ("undefined")[1365];
    for (let v10 = 0; v10 < 50; v10++) {
    }
}
gc();
