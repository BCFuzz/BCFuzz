for (let v0 = 0; v0 < 5; v0++) {
    const v1 = `
        /\u{12345}/myvis;
    `;
    for (let v3 = 0; v3 < 5; v3++) {
        function F4() {
            if (!new.target) { throw 'must be called with new'; }
            v1.replace(F4).localeCompare(v1);
        }
        new F4();
    }
}
gc();
