let counter = 500;

function randint(){
	let st = $('#start').val();
	
	counter -= st
	
	$('#points').html('You have '+ counter + ' points');
	if (counter < 0) {
		alert('You lost');
		$('#points').html('Wasted').css('color', 'red').css('font-size', '90px');
		$('#btn').prop('disabled', true)
		$('#images').html('<button id="but" onclick="document.location.reload();">New game</button>')
	}
	else{
	
	let a =Math.floor(Math.random()*6+1)
	let b =Math.floor(Math.random()*6+1)
	let c =Math.floor(Math.random()*6+1)
	
	$('#images').html(
		"<img src='g"+a +".png'>" +
		"<img src='g"+b +".png'>" +
		"<img src='g"+c +".png'>"
		)

	if(a==b && b==c){
		counter += st*7
		$('#points').html('You have '+ counter + ' points');
	}
	if(a==b || b==c || a==c){
		counter+= st*2
		$('#points').html('You have '+ counter + ' points');
	}
}}