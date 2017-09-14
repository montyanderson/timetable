(async () => {
    const base = "http://localhost:8080";

    const subjects = await axios.get(base + "/subjects");
    console.log("Subjects: " + subjects);
    const periods = await axios.get(base + "/subjects");
    console.log("Periods: " + periods);
    
})().catch(e => {
    console.log(e);
});
