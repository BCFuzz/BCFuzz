const v2 = new Int16Array(3233);
for (const v3 of v2) {
    v3 % v3;
    typeof v3 === "boolean";
}
gc();
