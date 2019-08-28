export const inc = () => ({type:"INC"});
export const dec = () => ({type:"DEC"});
export const rnd = () => {
    return {
        type:"RND",
        randomNum: Math.floor(Math.random()*10)}
}
