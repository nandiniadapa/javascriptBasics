 document.getElementById('btnSubmit').addEventListener('click', function() {
          debugger;
            
            var total = 0;
            var radios = document.querySelectorAll('input[type="radio"]:checked');
            
            radios.forEach(radio => {
                debugger;
                total += parseInt(radio.value);
            });
            if(total >= 600000){
                document.getElementById('pResult').textContent = `Total: ${total} - Category: Rich`;
            } else if(total >= 400000){
                document.getElementById('pResult').textContent = `Total: ${total} - Category: Middle Class`;
            } else {
                document.getElementById('pResult').textContent = `Total: ${total} - Category: Poor`;
            }
        
            // let category = total >= 300000 ? 'Rich' : total >= 150000 ? 'Middle Class' : 'Poor';
            // document.getElementById('pResult').textContent = `Total: ${total} - Category: ${category}`;
        });
