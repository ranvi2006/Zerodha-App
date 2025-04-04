

const validationRoutes = (user) => {

    if (user.phoneNo == null) {
        return "/signup";
    }
    else if (user.name == null || user.email == null) {
        return "/auth/signup";
    }
    else if (user.panCard.name == null || user.panCard.number == null || user.panCard.dob == null) {
        return "/auth/step1"
    }
    else if (user.bank.holderName == null || user.bank.accountNumber == null || user.bank.idfc == null) {
        return "/auth/step2"
    }
    else if (user.adharCard.name == null || user.adharCard.number == null || user.adharCard.dob == null) {
        return "/auth/step3"
    }
    else if (user.isDone == false) {
        return "/auth/step4"
    }
    else if (user.isDone == true) {
        return "/kite/dashboard"
    }
    return null;
};

export default validationRoutes;