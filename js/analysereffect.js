AFRAME.registerComponent('analysereffect', {
    schema: {
        analyser: { type: 'selector' },
    },
    
    init: function () {

        let firstcam = document.getElementById('firstcam');
        let secondcam = document.getElementById('secondcam');
        let firstcol = document.getElementById('firstcol');
        this.data.analyser.addEventListener('audioanalyser-beat-high',() => {
            //TODO: add event listener

            console.log('beat!')
            
            let rotx = Math.random() * (-90);
            let roty = Math.random() * 90 - 45;
            secondcam.setAttribute('rotation',{
                x: rotx,
                y: roty,
                z: 0})

            secondcam.setAttribute('camera', 'active:true');
            //secondcam.setAttribute('camera', 'active', true);
            firstcam.setAttribute('camera', 'active:false');
            firstcol.setAttribute('color', '#FF6600');

            setTimeout(() => {
                secondcam.setAttribute('camera', 'active:false');
                firstcam.setAttribute('camera', 'active:true');
                firstcol.setAttribute('color', '#02FFDD')
            }, 300);

        });
    },

    tick: function (time, timeDelta) {
        // let analyser = document.getElementById('analyser');
        let analyser = this.data.analyser;
        let analysercomp = analyser.components.audioanalyser;
        if (analysercomp){
            let volume = analysercomp.volume / 100;
            // console.log(volume);
            this.el.setAttribute('intensity', volume);
        }
        
    }
});
