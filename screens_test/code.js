console.log("hello")
const calculate = () => {
    console.log("check")
    document.getElementById("calc_btn").innerText = "CHECKING"
    document.getElementById("calc_btn").disabled = true;
    document.getElementById("calc_btn").style.cursor = "not-allowed"
    document.getElementById("calc_btn").style.background = "#ff898f"

    document.getElementById("spiner").style.display = "flex"
    setTimeout(() => {
        //API call and processing on the Server....
        window.location.href = `http://127.0.0.1:5500/screens_test/reccomended.html`;
    }, 4000);

}