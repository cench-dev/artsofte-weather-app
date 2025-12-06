export function checkIsParamNum(value) {
    const num = parseFloat(value)
    if (!isNaN(num) && isFinite(num) && value.trim() !== '') {
        return true;
    }

    return false;
}

export function checkIsValidLatitude(value) {
    const num = parseFloat(value)
    if (isNaN(num)) {
        return false;
    }
    if (num < -90 || num > 90) {
        return false;
    }

    return true;
}

export function checkIsValidLongitude(value) {
    const num = parseFloat(value)
    if (isNaN(num)) {
        return false;
    }

    if (num < -180 || num > 180) {
        return false;
    }

    return true;
}