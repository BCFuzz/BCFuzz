const v1 = /a.xyz{0,1}r+/dvs;
const v2 = /a\nW/vgi;
const v3 = /((\xed\xa0\x80))\x02q9abc/dygis;
function f4(a5, a6, a7, a8) {
    Object.defineProperty(a6, "global", { configurable: true, value: 0.3626353358951555 });
    return a5.toString();
}
f4(v2, v1);
f4(v1, v3);
gc();
