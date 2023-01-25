
function recursiveReverseString(text: string): string {
    if (text.length <= 0)
    return text

    return  recursiveReverseString(text.substring(1)) + text.charAt(0)
}
console.log(recursiveReverseString('hello'))//olleh
console.log(recursiveReverseString('prayuth'))//htuyarp
