class C0 {
    static {
        const v3 = `
            /\u{12345}/myvis;
            let v5 = 1073741823;
            let v6 = 0.5191985838694158;
            v6--;
            ++v5;
        `;
        v3.split(8);
    }
}
gc();
