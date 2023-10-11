//Resolver Mensgaem de erro caso não digitar a tarefa ou descrição, usar o localStorage, estudar o codigo

function listaDeTarefas() {
    let divList = document.getElementById('list');
    let cardTarefa;
    return {
        inicia() {
            this.click()
        },


        click() {
            document.addEventListener('click', (e) => {
                let el = e.target;
                if(el.classList.contains('addTarefa')) {
                    let tarefa = document.querySelector('#tarefa').value
                    let description = document.querySelector('#description').value
                    if(tarefa.length === 0 || description.length  === 0) {
                        divList.innerHTML= '<h1>Digite a tarefa e a descrição!</h1>'
                        return
                    } else {
                        this.addTarefaEDescrição(tarefa,description)
                    }
                }
                if(el.classList.contains('Delete')) {
                    el.parentElement.remove();
                } else if(el.classList.contains('Checked')) {
                   let elementoPai = el.parentElement;
                   elementoPai.querySelector('h1').style.textDecoration = 'line-through';
                   elementoPai.querySelector('p').style.textDecoration = 'line-through';
                }
                
            })
        },


        addTarefaEDescrição(t, d) {
            let h1Tarefa = document.createElement('h1');
            h1Tarefa.innerText = t;
            h1Tarefa.classList.add('taf-txt')
            let pDescription = document.createElement('p');
            pDescription.innerText = d;
            pDescription.classList.add('description-txt')
            let buttons = this.addBtn();
            let delet = buttons.btnDelet
            let finish = buttons.btnFinish
            this.criaDivTarefa(h1Tarefa, pDescription, finish, delet);
        },


        criaDivTarefa(t, d, f, del) {
            cardTarefa = document.createElement('div');
            cardTarefa.classList.add('card-tarefas');
            cardTarefa.appendChild(t);
            cardTarefa.appendChild(d);
            cardTarefa.appendChild(f);
            cardTarefa.appendChild(del);
            divList.appendChild(cardTarefa);
        },


        addBtn() {
            let btnFinish = document.createElement('button');
            btnFinish.innerText = '✓';
            btnFinish.classList.add('btn-list', 'Checked')
            let btnDelet = document.createElement('button');
            btnDelet.innerText = 'X';
            btnDelet.classList.add('btn-list', 'Delete')
            //Criação dos botões
            
            
            //Criação da div que ira conter os botões
            
            //atribuição dos botões na DIV
            

            document.addEventListener('submit', (e) => {
                e.preventDefault();
            })
            return {btnFinish, btnDelet}
        }
    }

}

const tarefas = listaDeTarefas();
tarefas.inicia();