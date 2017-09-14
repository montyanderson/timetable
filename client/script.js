(async () => {
    const base = "http://localhost/api";

    const subjects = (await axios.get(base + "/subjects")).data;
    console.log("Subjects: ", subjects);
    const periods = (await axios.get(base + "/periods")).data;
    console.log("Periods: ", periods);

})().catch(e => {
    console.log(e);
});
