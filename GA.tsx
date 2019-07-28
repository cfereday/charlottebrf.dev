const triggerGTagEvent = (window as any).dataLayer || (() => {})

export const homePageVisit = () => triggerGTagEvent.push({ homePage: 'home page vist' })
export const profilePageVisit = () => triggerGTagEvent.push({ profile: 'profile page visit' })
export const portfolioPageVisit = () => triggerGTagEvent.push({ portfolio: 'portfolio page visit' })
export const speakingPageVisit = () => triggerGTagEvent.push({ portfolio: 'speaking page visit' })
export const communityPageVisit = () => triggerGTagEvent.push({ portfolio: 'community page visit' })
