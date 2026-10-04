function calculateAge() {

    const dobInput = document.getElementById("dob").value;

    if (dobInput === "") {

        document.getElementById("result").innerHTML =
            "Please select your date of birth.";

        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {

        document.getElementById("result").innerHTML =
            "Date of birth cannot be in the future.";

        return;
    }

    let years =
        today.getFullYear() - dob.getFullYear();

    let months =
        today.getMonth() - dob.getMonth();

    let days =
        today.getDate() - dob.getDate();


    if (days < 0) {

        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }


    if (months < 0) {

        years--;

        months += 12;
    }


    document.getElementById("result").innerHTML =
        "Your Age is:<br>" +
        years + " Years, " +
        months + " Months, " +
        days + " Days";
}
