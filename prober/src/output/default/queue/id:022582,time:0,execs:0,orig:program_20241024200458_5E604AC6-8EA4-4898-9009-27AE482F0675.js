const v2 = Array(1000);
function f3(a4) {
    const o5 = {
        [v2]: v2,
        "g": a4,
    };
    return o5;
}
const v7 = f3(f3(Array));
const v9 = [v7.g];
function f10() {
    return v7;
}
JSON.parse(JSON.stringify(v9), f10);
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
