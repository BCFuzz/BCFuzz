const v0 = /a\nW/vgi;
function f1(a2, a3) {
    const v4 = `
        /[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]\u{12345}\u{23456}?/mygiu;
    `;
    return v4;
}
v0.toString = f1;
function f6(a7, a8, a9, a10) {
    const v12 = a7.toString(a9, a8).link(f6);
    for (const v13 of v12) {
        v13.search(v12);
    }
    const o31 = {
        [f6](a16, a17, a18, a19) {
            for (let i22 = 0, i23 = 10; i22 < i23;) {
                [/(\2)(\1)/mdvgi];
            }
        },
    };
    for (let i34 = 0, i35 = 10; i34 !== i35; i35--) {
    }
    return a8;
}
f6(v0);
gc();
