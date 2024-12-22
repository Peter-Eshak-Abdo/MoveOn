// Regular Expressions
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
const nameRegex = /^[a-zA-Z]+$/;

// دالة التحقق من تسجيل الدخول
function validateLoginForm() {
    const usernameOrEmail = document.querySelector('#login input[placeholder="Username or Email"]').value;
    const password = document.querySelector('#login input[placeholder="Password"]').value;

    if (!emailRegex.test(usernameOrEmail)) {
        alert("يرجى إدخال بريد إلكتروني صالح.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، ورقم، ويجب أن تكون أطول من 8 أحرف.");
        return false;
    }

    return true;
}

// دالة التحقق من نموذج التسجيل
function validateRegisterForm() {
    const firstName = document.querySelector('#register input[placeholder="Firstname"]').value;
    const lastName = document.querySelector('#register input[placeholder="Lastname"]').value;
    const email = document.querySelector('#register input[placeholder="Email"]').value;
    const password = document.querySelector('#register input[placeholder="Password"]').value;

    if (!nameRegex.test(firstName)) {
        alert("الاسم الأول يجب أن يحتوي على حروف فقط.");
        return false;
    }

    if (!nameRegex.test(lastName)) {
        alert("الاسم الأخير يجب أن يحتوي على حروف فقط.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("يرجى إدخال بريد إلكتروني صالح.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، ورقم، ويجب أن تكون أطول من 8 أحرف.");
        return false;
    }

    return true;
}

