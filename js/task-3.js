function getElementWidth(content, padding, border) {
    const contentInt = Number.parseInt(content)
    const paddingInt = Number.parseInt(padding)
    const borderInt = Number.parseFloat(border)
    return contentInt + paddingInt*2 +borderInt*2 
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
