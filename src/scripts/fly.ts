export function GetDistance(e:Element,b:Element) {
    var ec = e.getBoundingClientRect()
    var bc = b.getBoundingClientRect()
    return Math.sqrt((ec.top - bc.top)**2 + (bc.left - ec.left)**2)
}

export function sleep(ms:number) {return new Promise(resolve => setTimeout(resolve, ms));}