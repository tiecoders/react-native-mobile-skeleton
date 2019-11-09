import queryString from 'qs'

/**
 * Return a remaining timeout
 * according to the given minimum delay
 *
 * @param startingTime Request starting time
 * @param minimumDelay Minimum delay to wait
 * @returns {number}
 */
const getTimeout = (startingTime, minimumDelay = 2000) => {
    const requestTime = Date.now() - startingTime
    const timeDifference = minimumDelay - requestTime

    return timeDifference > 0 ? timeDifference : 0
}

/**
 * Returns a query string value
 * @param paramName
 * @param src Source string
 * @returns {*|string}
 */
const getQueryString = (paramName, src = window.location.search) => {
    const urlParams = queryString.parse(src.replace(/^\?/, ''))

    return paramName in urlParams ? urlParams[paramName] : null
}

/**
 * Checks if error message returns a denied access
 * @param message
 */
const accessDenied = message => message === 'invalid_grant' || message === 'access_denied'

export { getTimeout, getQueryString, accessDenied }