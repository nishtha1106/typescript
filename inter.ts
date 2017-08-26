interface player {
	run () :void;
	addlives(n :number) :void ;
	score(): number;
}

function createPlayer():player {
return {
	run:function(){},
	addlives:function(n:number){},
	score:function (){ return -1}
	}
	}
var player1 = createPlayer();
