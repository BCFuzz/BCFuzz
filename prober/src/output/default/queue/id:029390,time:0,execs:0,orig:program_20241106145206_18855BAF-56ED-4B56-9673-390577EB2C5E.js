const v0 = /[\p{Script_Extensions=Mongolian}&&\p{Number}](?<=a)/myv;
class C1 {
    constructor(a3) {
        const v4 = `
            const o9 = {
                toString(a6, a7) {
                    return /\u{12345}/myvis;
                },
            };
            /[(ab)[\xe2\x81\xa3]]/myvis;
        `;
        v4.split(a3);
    }
}
new C1(v0);
gc();
