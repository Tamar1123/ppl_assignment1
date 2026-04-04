import * as R from "ramda";

const stringToArray = R.split("");
//helper function
export const isVowel: (letter: string) => boolean = (letter: string): boolean => R.includes(letter, vowels);;
export const isLetterOrDigit: (ch: string) => boolean = (ch: string): boolean => 
    (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9');;
export const lettersAndNumsArray = R.pipe(R.toLower, stringToArray, R.filter(isLetterOrDigit));

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = 
    R.pipe(R.toLower, stringToArray, R.filter(isVowel), R.length);

/* Question 2.2 */
export const isPalindrome = (text: string): boolean => {
    const textArray = lettersAndNumsArray(text);
    const reversed = textArray.reduceRight((acc: string, curr: string) => acc + curr, "");
    return textArray.join("") === reversed;
}
    
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => {
    const s = t.root;
    return R.isEmpty(t.children) ? s : s.concat(" ").concat((R.map(treeToSentence, t.children)).join(" "));
};;






