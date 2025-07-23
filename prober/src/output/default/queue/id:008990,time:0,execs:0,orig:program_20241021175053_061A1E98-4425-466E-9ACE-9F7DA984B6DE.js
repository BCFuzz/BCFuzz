for (let i = 0; i < 5; i++) {
    const o6 = {
        toString(a1, a2) {
            let v3;
            try { v3 = this.toLocaleString(); } catch (e) {}
            const v4 = this.__proto__;
            v4.hasOwnProperty(v4);
            return v3;
        },
    };
    o6.toString();
}
gc();
