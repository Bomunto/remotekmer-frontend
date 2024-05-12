import Cookies from 'universal-cookie'

const cookies = new Cookies(null, { path: '/' })

type TokenType = 'access' | 'refresh'

const ACCESS_TOKEN_KEY = 'authToken'
const REFRESH_TOKEN_KEY = 'refreshToken'

const EXPIRATION_TIME = 3600 * 24 * 7 // 7 jours

const HTTP_ONLY = false
const SECURE = false

const getAuthToken = (type: TokenType): string | undefined => {
    const key = type === 'access' ? ACCESS_TOKEN_KEY : REFRESH_TOKEN_KEY
    return cookies.get(key) || undefined
}

const setAuthToken = (token: string, type: TokenType) => {
    const key = type === 'access' ? ACCESS_TOKEN_KEY : REFRESH_TOKEN_KEY
    cookies.set(key, token, {
        httpOnly: HTTP_ONLY,
        secure: SECURE, // HTTPS uniquement
        maxAge: EXPIRATION_TIME,
    })
}

const setUserInfo = (userInfo: any) => {
    cookies.set('userInfo', userInfo, {
        httpOnly: HTTP_ONLY,
        secure: SECURE,
        maxAge: EXPIRATION_TIME,
    })
}

const getUserInfo = () => {
    return cookies.get('userInfo')
}

const deleteAuthToken = (type: TokenType) => {
    const key = type === 'access' ? ACCESS_TOKEN_KEY : REFRESH_TOKEN_KEY
    cookies.remove(key)
}

/*const refreshAccessToken = async () => {
    const refreshToken = getAuthToken('refresh')
    if (!refreshToken) return

    try {
        const response = await RefreshTokenAsync(refreshToken)
        setAuthToken(response.access, 'access')
    } catch (error) {
        console.error(
            "Erreur lors du rafraîchissement du jeton d'accès:",
            error
        )
        deleteAuthToken('access')
        deleteAuthToken('refresh')
    }
}*/

export {
    getAuthToken,
    setAuthToken,
    deleteAuthToken,
    setUserInfo,
    getUserInfo,
}
