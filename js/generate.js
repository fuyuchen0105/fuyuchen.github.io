AFRAME.registerComponent('generatefloor', {
    // for pool obj container
    schema: {
        pool: {
            type: 'string'
        },
        zoffset: {
            default: 0
        }
    },

    init: function () {
        this.start = false;

        this.el.sceneEl.addEventListener('start', ()=>{
            //generate floor
            this.gen();

            //set start
            this.start = true;
        });
    },

    tick: function (time, timeDelta) {

        

        
        //count on start
        if (this.start) {
            this.startTime = time;
            this.start = false;
        }

        //TODO: check if time passsss
        if (time - this.startTime > 3000) {
            //TODO: change position here
            let pos = this.el.getAttribute('position');
            //console.log(pos);
            // {x: 0, y: 0, z: 0}
            pos.z += 0.01;
            //pos.z += 0.001 * timeDelta;
            if (pos.z >= 10) {
                pos.z = 0;
            }
            this.el.setAttribute('position', pos);



        }
    },

    gen: function() {

        let planepool = this.el.sceneEl.components.pool__plane;
        // or
        // let planepool = this.el.sceneEl.components['pool__plane'];

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool.requestEntity();
                el.setAttribute('position', '0 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool.requestEntity();
                el.setAttribute('position', '1.5 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool.requestEntity();
                el.setAttribute('position', '-1.5 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        let planepool2 = this.el.sceneEl.components.pool__plane2;
        // or
        // let planepool = this.el.sceneEl.components['pool__plane'];

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool2.requestEntity();
                el.setAttribute('position', '0 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool2.requestEntity();
                el.setAttribute('position', '1.5 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool2.requestEntity();
                el.setAttribute('position', '-1.5 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        let planepool3 = this.el.sceneEl.components.pool__plane3;
        // or
        // let planepool = this.el.sceneEl.components['pool__plane'];

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool3.requestEntity();
                el.setAttribute('position', '0 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool3.requestEntity();
                el.setAttribute('position', '1.5 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool3.requestEntity();
                el.setAttribute('position', '-1.5 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        let planepool4 = this.el.sceneEl.components.pool__plane4;
        // or
        // let planepool = this.el.sceneEl.components['pool__plane'];

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool4.requestEntity();
                el.setAttribute('position', '0 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool4.requestEntity();
                el.setAttribute('position', '1.5 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool4.requestEntity();
                el.setAttribute('position', '-1.5 0 '+(i*-1));
                el.play();
            }, i*200);
        }

        
    }
});
