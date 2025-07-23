const v2 = [[/qbu(?:ab|cde)[\d-\d]/dyis]];
const v3 = v2.toString();
for (let i6 = 0, i7 = 10; i6 !== i7; i7--) {
}
function f14(a15) {
    const o16 = {
        ...v3,
        "g": a15,
    };
    return o16;
}
JSON.parse(JSON.stringify([f14(f14(v2)).g]));
gc();
