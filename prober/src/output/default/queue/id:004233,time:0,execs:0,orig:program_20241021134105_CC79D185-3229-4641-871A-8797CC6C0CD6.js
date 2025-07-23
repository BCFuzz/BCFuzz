const v2 = new Set("isSealed");
new Uint8Array(v2.add("isSealed"));
gc();
