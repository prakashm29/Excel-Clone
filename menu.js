let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let input = document.createElement('input')

bold.addEventListener("click",function(){
    setFontStyle("bold",bold);
})

italic.addEventListener("click",function(){
    setFontStyle("italic",italic);
})

underline.addEventListener("click",function(){
    setFontStyle("underline",underline);
})

function setFontStyle(styleName,element){
    if(lastSelectedCell){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        
        if(cellObject.fontStyle[styleName]){
            if(styleName == "bold"){
                bold.style.backgroundColor = "white"
                // bold.style.borderRadius = ""
                    lastSelectedCell.style.fontWeight = "normal";
                }
            else if(styleName == "italic"){
                italic.style.backgroundColor = "white"
                    lastSelectedCell.style.fontStyle = "normal";
                }
            else{
                underline.style.backgroundColor = "white"
                    lastSelectedCell.style.textDecoration = "none";
                }
            }
        else{
            
            if(styleName == "bold"){
                bold.style.backgroundColor = "darkgrey"
                bold.style.borderRadius = "4px"
                lastSelectedCell.style.fontWeight = "bolder";
                }
            else if(styleName == "italic"){
                    italic.style.backgroundColor = "darkgrey"
                    italic.style.borderRadius = "4px"
                    lastSelectedCell.style.fontStyle = "italic";
                }
            else{
                    underline.style.backgroundColor = "darkgrey"
                    underline.style.borderRadius = "4px"
                    lastSelectedCell.style.textDecoration = "underline";
                }
            }
        cellObject.fontStyle[styleName] = !cellObject.fontStyle[styleName];
    }
}

let inputColorBool = false

let inputColor =document.querySelector('.inputColor')
inputColor.addEventListener('click',()=>{
    inputColorBool = !inputColorBool
    if(!inputColorBool) innerInput.style.display = "none"
    
    let innerInput = document.querySelector('.InputColor')
    // it is behind input icon
    innerInput.click()


    innerInput.addEventListener('change',(e)=>{
        // console.log(e.currentTarget.val)
        lastSelectedCell.style.backgroundColor =e.currentTarget.value
    })
})

let textColorBool = false

let textColor =document.querySelector('.textColor')
textColor.addEventListener('click',()=>{
    textColorBool = !textColorBool
    if(!textColorBool) TextInput.style.display = "none"
    
    let TextInput = document.querySelector('.TextColor')
    // it is behind input icon
    TextInput.click()


    TextInput.addEventListener('change',(e)=>{
        // console.log(e.currentTarget.val)
        lastSelectedCell.style.color =e.currentTarget.value
    })
})
    let FontSize = document.querySelector('.FontSize')

    FontSize.addEventListener('change',(e)=>{
        // console.log(e.currentTarget.val)
        // console.log(lastSelectedCell)
        lastSelectedCell.style.fontSize = FontSize.value+"px"
        
    })

let cell = document.querySelector(".cell")
let lock = document.querySelector('#lock')
console.log(lock.value)

lock.addEventListener('click',()=>{
    for (let i = 0; i<allCells.length; i++){
        if(lock.value == "View Only"){
            allCells[i].setAttribute("contentEditable","false")
        }
        else{
            allCells[i].setAttribute("contenteditable","true")
        }
    }
})