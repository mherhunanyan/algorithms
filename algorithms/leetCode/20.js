function isValid(str) {
    const stack = [];
    const map = {
        ")": '(',
        '}': '{',
        "]": "["
    }
    
    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (stack.length === 0 || stack.pop() !== map[char]) {
            return false;
        }
    }
    return true;
}