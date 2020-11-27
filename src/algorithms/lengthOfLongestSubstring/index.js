/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    s = s.split("");
    let buffer = [];
    let discardedChars = []
    let longestLen = 0;

    while(s.length>0) {
        let char = s.shift();
        if (buffer.includes(char)) { 
            console.log(`${buffer.join("")}[${char}]`, buffer.indexOf(char), "||", s.join(""))
            buffer.push(char);
            buffer = buffer.slice((buffer.indexOf(char)+1))
            console.log(buffer.join(""), "||", s.join(""))
            continue;
        } else {
            buffer.push(char);
            console.log(`${buffer.slice(0,buffer.length-1).join("")}{${char}}`, buffer.indexOf(char), `len: ${buffer.length}`, "||", s.join(""))
            longestLen = (buffer.length > longestLen
                                ? buffer.length
                                : longestLen )
        }
        console.log(buffer.join(""), "||", s.join(""))

    }; 
    console.log(longestLen)
    return longestLen;
};

export default lengthOfLongestSubstring;