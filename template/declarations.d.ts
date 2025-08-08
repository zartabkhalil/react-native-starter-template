declare module 'react-native-instagram-login' {
    import * as React from 'react'

    interface InstagramLoginProps {
        ref: React.RefObject<any>
        appId: string
        appSecret: string
        redirectUrl: string
        scopes: string[]
        onLoginSuccess?: (data?: { access_token: string; user_id: number }) => void
        onLoginFailure?: (error: string) => void
        modalVisible?: boolean
        responseType?: string
        containerStyle?: object
        wrapperStyle?: object
        closeStyle?: object
    }

    export default class InstagramLogin extends React.Component<InstagramLoginProps> { }
}