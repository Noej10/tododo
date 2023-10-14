// '<i class="fa-solid fa-eraser"></i>' 아이콘 추가 태그

const todolist = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];

window.onload = function(){
    if(todolist[0]===null){
        return;
    }

    const toDOListView = document.getElementById('todo-list-view');


    for(let tododo of todolist){
    const todoNode = document.createElement('div');
    todoNode.innerText = tododo.title;
    todoNode.date = tododo.date;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = '<i class="fa-solid fa-eraser"></i>';

    todoNode.appendChild(removeBtn);

    todoNode.onclick = function(){
        if(this.style.textDecoration === "line-through")
        this.style.textDecoration = 'none';
        else
        this.style.textDecoration = "line-through";
        }

    removeBtn.onclick = function(){
        this.parentNode.remove();
        for(let i = 0; i<todolist.length; i++){
            if(todolist[i].date===this.parentNode.date){
                todolist.splice(i,1);
                i--;
            }
    
        }
        localStorage.setItem('todolist', JSON.stringify(todolist));
    }

    toDOListView.appendChild(todoNode);

}
    
}

// TODO  리스트를 창에 그려주는 함수 따로 생성해서
// 로컬스토리지에 저장된 데이터를 반복문을 통해 쭉 그려줘야함 



function addTodoKey(ev){
    console.log(ev);
    //비어있는 값 검사 후 비어있으면 코드 실행중지
    if(ev.target.value.trim() === '')
        return;

    function getTodoNode(){
        //요소만들기
    //내가 입력한 값 가져오기
    const todoTitle2 = ev.target.value;
    
    //데이터 만들기 및 저장
    let data2 = {
        title : todoTitle2,
        isDone : false,
        date : new Date().getTime()
    }

    todolist.push(data2);
    localStorage.setItem('todolist', JSON.stringify(todolist));


    // 추가할 일정 요소 만들기
    const todoNode = document.createElement('div');
    todoNode.innerText = data2.title;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = '<i class="fa-solid fa-eraser"></i>';

    todoNode.appendChild(removeBtn);

    todoNode.onclick = function(){
        if(this.style.textDecoration === "line-through")
        this.style.textDecoration = 'none';
        else
        this.style.textDecoration = "line-through";
        }

    removeBtn.onclick = function(){
        this.parentNode.remove();
        for(let i = 0; i<todolist.length; i++){
            if(todolist[i].date===this.parentNode.date){
                todolist.splice(i,1);
                i--;
            }
    
        }
        localStorage.setItem('todolist', JSON.stringify(todolist));
    }

   

    return todoNode;
    
    

    }
    
     //엔터키 입력 시 해당 코드 실행
     if(!ev.keyCode || ev.keyCode === 13){
        // 일정 보여주는 영역을 가져옴
         const toDOListView = document.getElementById('todo-list-view');
        // 요소 생성 함수호출
         const todoNode2 = getTodoNode();
         toDOListView.appendChild(todoNode2);
        // 일정 추가 후 비워주기
         ev.target.value="";

     }




 
    
}




