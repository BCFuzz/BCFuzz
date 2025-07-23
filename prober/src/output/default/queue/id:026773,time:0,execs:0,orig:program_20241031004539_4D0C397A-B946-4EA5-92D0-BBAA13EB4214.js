const v0 = [-2147483648,1073741825,4294967295,-1810460340];
let v1 = 12;
v1++;
const v4 = ("-789426228").constructor;
const v5 = v4.fromCharCode(v1, v4, v0, "-789426228");
function f6(a7) {
    const o8 = {
        "g": a7,
        ...v5,
    };
    return o8;
}
JSON.parse(JSON.stringify([f6(f6("-789426228")).g]));
const v17 = 1073741825n % 1073741825n;
for (let i19 = v17, i20 = 10; i19 < i20; i20--) {
}
gc();
