    function drawArray(drawArray)
    {
            var countup = this;
            var newComp = document.createElement('div');

            newComp.className = 'box';

            var comp = '';
            var para = '';

        for (index = 0; index < cells-1; index++)
        {
            if (drawArray[index] == 0) 
            {
                //document.write('space' + '<br>');
                //document.write('<div class="space"></div>');
                comp = comp + '<div class="space"></div>';
            }
            else
            {
                //document.write('mass' + '<br>');  
                //document.write('<div class="mass"></div>');  
                comp = comp + '<div class="mass"></div>';
            }
            if (index % 3 < 2)
            {
                comp = comp + '<div class="v_sep"></div>';
            }
            else
            {
                comp = comp + '<div class="h_sep"></div>';
            }
        }

            para = '<p>' +drawArray+ '</p>'

            comp = comp + para;

            newComp.innerHTML = comp;
            document.getElementById('dd').appendChild(newComp);

    }

    function binaryConverter(num) {
            
        var temp = num;
        var checkSum = 0;


        //var binArray = [0,0,0,0,0,0,0,0,0,0];
        var binArray = new Array(cells);

        for (var init=0;init<cells;init++)
        {
            binArray[init]=0;
        }

        for (index = cells-2; index >=0; index--)
        {

            var rem = temp % 2;
            var temp = Math.floor(temp / 2);

//            document.write('This is the remainder'+rem + '<br>');
//            document.write('This is the quotient baby'+temp + '<br>');

                binArray[index] = rem;
                checkSum = checkSum + binArray[index]; 
        }

        binArray[cells-1] = checkSum;
        binArray[cells] = num;

        blocks.push(binArray);

 
        //document.write(binArray + '<br>');

    }
    
    function drawPage(count)
    {
        var countup = this;
        var newTitle = document.createElement('div');
        newTitle.className = 'page';
        pageId = 'pageId' + String(count);
        newTitle.id = pageId;

        var page ='';

        page = page +'<h2>' + String(count) +' Mass filled compositions.' + '</h2>';
        newTitle.innerHTML = page;
        document.getElementById('dd').appendChild(newTitle);
    
    }

    function sortByMass()
    {

        var i           = 0;
        var j           = 0;
        var count       = 0;
        
        for(count=0; count<=cells-1; count++)
            {
                
                drawPage(count);
                
                for (i =0; i < poss ; i++)
                    {
                        for(j = 0; j < cells-1; j++)
                        {
                            if (blocks[i][cells-1] == count) 
                            {
                                drawArray(blocks[i]);
                                break;
                            }   
                        }
                    }
            }
    }


    function fibonacci()
    {   
        //document.write('<h2>Fibonacci Sequence</h2>');        
        var a=0,b=1,c=0;
        for(c=0; c < poss;)
        {
                drawArray(blocks[c]);
                c = a + b;
                a = b;
                b = c;
        }
    }


    var cells       = 10;
    var currIndex   = 0;

    var poss        = Math.pow(2, cells-1);

    var blocks      = new Array();

    for (i =0; i < poss ; i++)
    {
        binaryConverter(i);
        //console.log(i);
        //document.write(i + '<br>');
    }

    drawPage('Fibonacci');
    fibonacci();

    drawPage('Rotated')

    //sortByMass();

    //    $(document).ready(function(){
    //
    //        $('.space').on('click',function(){

    //              $(this).toggleClass('mass');

    //          });
    //  });


/*(function(){   
            var countup = this;
            var newNode = document.createElement('div');
            newNode.className = 'box';
            //newNode.innerHTML = 'this created div contains class while created!!!';
            newNode.innerHTML = '<div class="space"></div><div class="v_sep"></div><div class="space"></div><div class="v_sep"></div><div class="space"></div>';
            document.getElementById('dd').appendChild(newNode);           
        })();

        */
