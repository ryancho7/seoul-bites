const pallete = [
    {
        text: '#f97316',
        bgColor: opacity => `rgba(251, 146, 60, ${opacity})`
    },
    {
        text: '#334155',
        bgColor: opacity => `rgba(30, 41, 59, ${opacity})`
    },
    {
        text: '#7c3aed',
        bgColor: opacity => `rgba(167, 139, 250, ${opacity})`
    },
    {
        text: '#009950',
        bgColor: opacity => `rgba(0, 179, 89, ${opacity})`
    },
    {
        text: '#4299e1',
        bgColor: opacity => `rgba(66, 153, 225, ${opacity})`
    },
    {
        text: '#dc2626',
        bgColor: opacity => `rgba(248, 113, 113, ${opacity})`
    }
]

export const themeColors = {
    ...pallete[4]
}