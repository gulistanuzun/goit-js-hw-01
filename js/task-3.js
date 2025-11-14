function getElementWidth(content, padding, border) {
    const contentInt = Number.parseInt(content)
    const paddingInt = Number.parseInt(padding)
    const borderInt = Number.parseFloat(border)
    return contentInt + paddingInt*2 +borderInt*2 
}