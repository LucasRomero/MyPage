function CalculateAge() {
    var today = new Date();
    var birth = new Date(1995,3,7);
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    $('#lucas-years-old').html(age);
}
