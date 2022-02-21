const useValidate = () => {
    function haveValue(value) {
        if(value.trim() === ''){
            return {
                isInput: false,
                message: 'Không được để trống ô này !'
            }
        }else{
            return {
                isInput: true,
                message: ''
            }
        }
    }
    function minLength(value, number){
        if(value.length < number){
            return {
                isInput: false,
                message: `Số ký tự lớn hơn ${number}`
            }
        }else{
            return {
                isInput: true,
                message: ''
            }
        }
    }

    function lengthPhone(value){
        if(value.length <10 || value.length >13){
            return {
                isInput: false,
                message: `Số điện thoại không hợp lệ`
            }
        }else{
            return {
                isInput: true,
                message: ``
            }
        }
    }
    function isEmail(value){
        const pattern = /^[\w]+@[a-z|A-Z]{3,}\.com$/;
        if(!pattern.test(value)){
            return {
                isInput: false,
                message: `Email không hợp lệ`
            }
        }else{
            return {
                isInput: true,
                message: ``
            }
        }
    }
    function isFullName(value){
        if(/\d/.test(value) || !(/\s/).test(value)){
            return {
                isInput: false,
                message: `Tên không hợp lệ, mời nhập lại !`
            }
        }else{
            return {
                isInput: true,
                message: ``
            }
        }
    }
    return {
        haveValue: haveValue,
        minLength: minLength,
        lengthPhone: lengthPhone,
        isEmail: isEmail,
        isFullName: isFullName
    }
}
export {useValidate}