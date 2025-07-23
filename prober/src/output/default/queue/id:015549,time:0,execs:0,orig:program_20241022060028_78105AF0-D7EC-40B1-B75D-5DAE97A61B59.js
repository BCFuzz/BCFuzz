const v2 = [256,-65536,1198883244,255,-65536,5];
const v4 = 65535n / 65535n;
function f5(a6, a7) {
    const o8 = {
        [a6]: 9007199254740991,
        "h": a6,
        "c": v4,
    };
    return a7;
}
const v9 = f5(undefined, f5);
v9();
f5(f5(v9), undefined);
f5(v2);
for (let v15 = 0; v15 < 100; v15++) {
    f5(this);
}
gc();
