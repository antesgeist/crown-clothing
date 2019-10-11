import React from 'react'

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText
} from './error-boundary.styles'

class ErrorBoundary extends React.Component {
    constructor() {
        super()

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasErrored: true
        }
    }

    componentDidCatch(error) {
        console.log(error)
    }

    render() {
        const { hasErrored } = this.state
        const { children } = this.props

        if (hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return children
    }
}

export default ErrorBoundary
