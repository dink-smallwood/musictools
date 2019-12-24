var accidentaldict = 
    {"sharp" : ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'],
    "flat" : ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab']}

var scaledict =  {
    0 : [2,2,1,2,2,2,1], //Major
    1 : [2,1,2,2,1,2,2], // Minor
    2 : [2,2,3,2,3], //Major Pent
    3 : [3,2,2,3,2], //Min Pent
    4 : [3,2,1,1,3,2], //Blues
    5 : [2,1,2,2,2,1,2], // Dorian
    6 : [1,2,2,2,1,2,2], //Phrygian
    7  : [2,2,2,1,2,2,1], // Lydian
    8 : [2,2,1,2,2,1,2], //Mixolydian
	9 : [1,2,2,1,2,2,2], // Locrian
    10 : [2,2,2,2,2,2], // Whole
    11 : [1,2,1,2,1,2,1,2], //Sym Dom
    12 : [2,1,2,1,2,1,2,1], // Sym Dim
    13 : [1,2,1,2,2,2,2], // Sup loc
    14 : [2,2,2,1,2,1,2], // lyd dom
    15 : [2,1,2,2,2,2,1], // jazz min
    16 : [2,2,1,2,2,1,1] // bebop
}

document.onclick = () => {runtime()}

function showScale(){

    var rootlist = document.getElementsByName("rootnote")
    var root
    for (const i of rootlist) {
        if (i.checked){ 
            root = i.value
        }
    }

    var chosenaccidentals
    var accidentals = document.getElementsByName("accidental")
    for (const j of accidentals) {
        if (j.checked){ 
            chosenaccidentals = accidentaldict[j.value]
        }
    }

    var scalelist = document.getElementById("scales")
    var selectedscale = scaledict[scalelist.selectedIndex]

    var outstring = ""

    var walk = parseInt(root)
    selectedscale.forEach( (step) => {
        outstring += chosenaccidentals[walk] + ", "
        walk = (step + walk) % chosenaccidentals.length
        } )
    document.getElementById("output").textContent = outstring + chosenaccidentals[root]


}


function changeLabel()
{
    var chosenaccidentals
    var accidentals = document.getElementsByName("accidental")
    for (const j of accidentals) {
        if (j.checked){ 
            chosenaccidentals = accidentaldict[j.value]
        }
    }

    var labels = document.getElementsByClassName("label")
    for (i = 0; i < labels.length; i++) {
        labels[i].textContent = chosenaccidentals[i]
    }
}

function runtime(){
    showScale()
    changeLabel()
}